import { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, id, className = "", ...props }: Props) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="font-display font-medium text-[11px] uppercase tracking-[0.10em] text-steel"
      >
        {label}
        {props.required && <span className="text-brass ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={inputId}
        aria-required={props.required}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
        className={[
          "h-12 px-4 font-body text-[16px] text-bone placeholder:text-steel",
          "bg-carbon border rounded-[2px]",
          "transition-colors duration-150",
          "outline-none focus-visible:outline-none",
          error
            ? "border-[#C44038] focus:border-[#C44038]"
            : "border-divider focus:border-brass",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="font-body text-[12px] text-[#C44038]">
          {error}
        </p>
      )}
    </div>
  );
}
