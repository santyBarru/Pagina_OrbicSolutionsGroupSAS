import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function InputField({ label, ...props }: InputProps) {
  return (
    <label className="block text-sm font-medium text-white">
      <span className="mb-2 block">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-[#050710] px-4 py-3 text-white outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
      />
    </label>
  );
}
