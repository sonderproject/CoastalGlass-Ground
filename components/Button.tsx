import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 transition-transform duration-500 ease-out-soft ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-white"
      : "border border-line text-ink hover:border-white/30 hover:bg-white/5";
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      <Arrow className="group-hover:translate-x-1" />
    </Link>
  );
}
