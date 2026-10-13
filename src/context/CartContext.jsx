import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { STORE } from '../data/store';

const CartContext = createContext(null);
const STORAGE_KEY = 'layerform-cart';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const addItem = useCallback((product, { size, finish, qty = 1 } = {}) => {
    const s = size ?? product.sizes[0];
    const f = finish ?? product.finishes[0];
    const key = `${product.id}|${s.label}|${f}`;
    const price = Math.round(product.price * s.multiplier);

    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        { key, id: product.id, slug: product.slug, name: product.name, image: product.image, size: s.label, finish: f, price, qty },
      ];
    });
    setToast({ id: Date.now(), name: product.name, image: product.image });
  }, []);

  const updateQty = useCallback((key, qty) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i)),
    );
  }, []);

  const removeItem = useCallback((key) => setItems((prev) => prev.filter((i) => i.key !== key)), []);
  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    const shipping = subtotal === 0 || subtotal >= STORE.freeShippingThreshold ? 0 : STORE.shippingFlat;
    return {
      items,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      isOpen,
      toast,
      addItem,
      updateQty,
      removeItem,
      clear,
      openCart,
      closeCart,
    };
  }, [items, isOpen, toast, addItem, updateQty, removeItem, clear, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
