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

export default function PrimaryButton({
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
    "text-pitch bg-brass",
    "px-9 py-[14px] rounded-[2px]",
    "transition-all duration-150",
    "hover:bg-[#D4AB48] hover:-translate-y-px",
    "active:bg-[#B08A28] active:translate-y-0",
    "disabled:bg-divider disabled:text-steel disabled:cursor-not-allowed disabled:translate-y-0",
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
