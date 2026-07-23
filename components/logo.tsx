export default function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Achat Avis Google"
    >
      <rect width="64" height="64" rx="18" fill="#16a34a" />
      <path
        d="M32 5.3 39.7 21.6 57.3 24 44.5 36.3 47.7 53.9 32 45.9 16.3 53.9 19.5 36.3 6.7 24 24.3 21.6Z"
        fill="#ffffff"
      />
    </svg>
  );
}
