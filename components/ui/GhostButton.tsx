import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function GhostButton({
  children,
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
  fullWidth = false,
}: Props) {
  const base = [
    "inline-flex items-center justify-center",
    "font-display font-bold text-[13px] uppercase tracking-[0.12em]",
    "text-bone border border-bone/40",
    "px-9 py-[14px] rounded-[2px]",
    "transition-all duration-150",
    "hover:border-bone/100 hover:bg-bone/5",
    "active:border-brass active:text-brass",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
