import { type SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export default function FormSelect({
  label,
  error,
  id,
  children,
  className = "",
  ...props
}: Props) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="font-display font-medium text-[11px] uppercase tracking-[0.10em] text-steel"
      >
        {label}
        {props.required && (
          <span className="text-brass ml-1" aria-hidden="true">*</span>
        )}
      </label>
      <div className="relative">
        <select
          id={inputId}
          aria-required={props.required}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={!!error}
          className={[
            "w-full h-12 px-4 pr-10 font-body text-[16px] appearance-none",
            "bg-carbon border rounded-[2px]",
            "transition-colors duration-150",
            "outline-none focus-visible:outline-none",
            "cursor-pointer",
            error
              ? "border-[#C44038] focus:border-[#C44038] text-bone"
              : "border-divider focus:border-brass text-bone",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {children}
        </select>
        {/* Custom chevron */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brass text-[10px] leading-none"
        >
          ▾
        </span>
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="font-body text-[12px] text-[#C44038]"
        >
          {error}
        </p>
      )}
    </div>
  );
}
