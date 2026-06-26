interface Props {
  variant?: "line" | "spaced" | "rule";
}

export default function SectionDivider({ variant = "line" }: Props) {
  if (variant === "rule") {
    return (
      <div className="flex justify-start mb-3">
        <span className="block w-12 h-px bg-brass" aria-hidden="true" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 border-t border-divider w-full ${
        variant === "spaced" ? "my-8" : ""
      }`}
    />
  );
}
