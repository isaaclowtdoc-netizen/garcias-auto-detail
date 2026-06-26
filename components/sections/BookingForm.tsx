"use client";

import { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import FormSelect from "@/components/ui/FormSelect";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GhostButton from "@/components/ui/GhostButton";
import { SERVICES } from "@/lib/services";

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  color: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  service?: string;
  date?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormData = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  color: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Full name is required.";

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s().+\-]{7,}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.vehicle.trim()) errors.vehicle = "Vehicle information is required.";
  if (!data.service) errors.service = "Please select a service.";
  if (!data.date) errors.date = "Preferred date is required.";

  return errors;
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear field error on correction
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the first invalid field
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError(
        "Something went wrong sending your request. Please try again or call us directly."
      );
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        aria-live="polite"
        className="flex flex-col gap-6 py-16"
      >
        <span className="block w-12 h-px bg-brass" aria-hidden="true" />
        <h2 className="font-display font-bold text-[40px] leading-[1.1] text-bone">
          We&apos;ll be in touch.
        </h2>
        <p className="font-body text-[16px] leading-[1.7] text-steel max-w-md">
          Your request has been received. We&apos;ll contact you within 24 hours
          to confirm your appointment date and time.
        </p>
        <p className="font-body text-[13px] text-steel">
          No payment required. Payment is collected on-site at time of service.
        </p>
        <div className="pt-2">
          <GhostButton href="/services">View Our Services</GhostButton>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

      {/* Top-level server error */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="border border-[#C44038] rounded-[2px] px-5 py-4"
        >
          <p className="font-body text-[14px] leading-[1.6] text-bone">
            {serverError}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="name"
          label="Full Name"
          placeholder="Your full name"
          value={form.name}
          onChange={set("name")}
          error={errors.name}
          required
          autoComplete="name"
        />
        <FormInput
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="(555) 555-0000"
          value={form.phone}
          onChange={set("phone")}
          error={errors.phone}
          required
          autoComplete="tel"
        />
      </div>

      <FormInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={set("email")}
        error={errors.email}
        required
        autoComplete="email"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="vehicle"
          label="Vehicle Year / Make / Model"
          placeholder="e.g. 2019 BMW 3 Series"
          value={form.vehicle}
          onChange={set("vehicle")}
          error={errors.vehicle}
          required
        />
        <FormInput
          id="color"
          label="Vehicle Color"
          placeholder="e.g. Midnight Black"
          value={form.color}
          onChange={set("color")}
        />
      </div>

      <FormSelect
        id="service"
        label="Service Requested"
        value={form.service}
        onChange={set("service")}
        error={errors.service}
        required
      >
        <option value="" disabled style={{ color: "#6B6B6B" }}>
          Select a service
        </option>
        {SERVICES.map((s) => (
          <option key={s.id} value={s.id}>
            {s.title}
          </option>
        ))}
      </FormSelect>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="date"
          label="Preferred Date"
          type="date"
          value={form.date}
          onChange={set("date")}
          error={errors.date}
          required
          min={new Date().toISOString().split("T")[0]}
        />
        <FormSelect
          id="time"
          label="Preferred Time"
          value={form.time}
          onChange={set("time")}
        >
          <option value="">No preference</option>
          <option value="morning">Morning (8am – 12pm)</option>
          <option value="afternoon">Afternoon (12pm – 6pm)</option>
        </FormSelect>
      </div>

      <FormTextarea
        id="notes"
        label="Additional Notes"
        placeholder="Anything we should know — paint issues, specific concerns, previous treatments, etc."
        value={form.notes}
        onChange={set("notes")}
        rows={4}
      />

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center font-display font-bold text-[13px] uppercase tracking-[0.12em] text-pitch bg-brass hover:bg-[#D4AB48] active:bg-[#B08A28] disabled:bg-divider disabled:text-steel disabled:cursor-not-allowed px-9 py-[18px] rounded-[2px] transition-all duration-150"
        >
          {status === "submitting" ? "SUBMITTING..." : "REQUEST APPOINTMENT"}
        </button>
        <p className="font-body text-[13px] text-steel text-center">
          No payment required. Payment collected on-site at time of service.
        </p>
      </div>

    </form>
  );
}
