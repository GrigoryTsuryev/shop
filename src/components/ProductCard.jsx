import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/store';
import { BagIcon } from './Icons';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { slug, name, image, category, price, badge, rating, reviews } = product;

  return (
    <article className="product-card reveal">
      <div className="product-media">
        {badge && <span className={`badge ${badge.type}`}>{badge.text}</span>}
        <img src={image} alt={`${name} 3D printed sculpture`} loading="lazy" width="600" height="600" />
        <button
          type="button"
          className="btn btn-primary btn-sm quick-add"
          onClick={() => addItem(product)}
          id={`quick-add-${slug}`}
          aria-label={`Add ${name} to cart`}
        >
          <BagIcon size={16} /> Quick add
        </button>
      </div>
      <div className="product-body">
        <span className="product-cat">{category}</span>
        <h3 className="product-name">
          <Link to={`/product/${slug}`}>{name}</Link>
        </h3>
        <div className="product-meta">
          <span className="price">
            <small>from</small>
            {formatPrice(price)}
          </span>
          <span className="rating">
            <span className="stars" aria-hidden="true">★</span> {rating.toFixed(1)}{' '}
            <span className="sr-only">out of 5,</span>({reviews})
          </span>
        </div>
      </div>
    </article>
  );
}
