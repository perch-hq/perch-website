export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="6.5"
        y="6.5"
        width="19"
        height="19"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M16 11.25 20.25 19.25h-8.5Z" fill="currentColor" />
      <path
        d="M4 26.25h24"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
