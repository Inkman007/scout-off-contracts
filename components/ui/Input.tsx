import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  id: string;
}

export default function Input({ label, error, helperText, id, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`input ${error ? "border-red-500 focus:border-red-500" : ""} ${className}`}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${id}-helper`} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
