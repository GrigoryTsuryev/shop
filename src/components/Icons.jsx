// Lightweight inline SVG icon set (no external dependency).
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const make = (paths) => {
  const Icon = ({ size = 20, className, ...rest }) => (
    <svg {...base} width={size} height={size} className={className} {...rest}>
      {paths}
    </svg>
  );
  return Icon;
};

export const BagIcon = make(
  <>
    <path d="M6 7h12l1 13H5L6 7Z" />
    <path d="M9 7V6a3 3 0 0 1 6 0v1" />
  </>,
);
export const ArrowIcon = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const CloseIcon = make(<path d="M6 6l12 12M18 6 6 18" />);
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CheckIcon = make(<path d="m5 12 4.5 4.5L19 7" />);
export const SearchIcon = make(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </>,
);
export const LayersIcon = make(
  <>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </>,
);
export const LeafIcon = make(
  <>
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
    <path d="M5 19 13 11" />
  </>,
);
export const HandIcon = make(
  <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-1V4.5a1.5 1.5 0 0 1 3 0V12m0-6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3 14a1.5 1.5 0 0 1 2.5-1.6L8 15" />,
);
export const TruckIcon = make(
  <>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </>,
);
export const ShieldIcon = make(
  <>
    <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
);
export const SparkIcon = make(
  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
);
export const BuildingIcon = make(
  <>
    <path d="M4 21V5l8-2v18M12 8h8v13" />
    <path d="M8 8v.01M8 12v.01M8 16v.01M16 12v.01M16 16v.01M2 21h20" />
  </>,
);
export const MailIcon = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
);
export const PhoneIcon = make(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
);
export const UploadIcon = make(
  <>
    <path d="M12 16V4M7 9l5-5 5 5" />
    <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
  </>,
);
export const ClockIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);
