import type { ReactNode } from "react";
import { ErrorMessage } from "@/ui/ErrorMessage";
import "@/ui/field.css";

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="field">
      {label}
      {children}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </label>
  );
}

export { Field };
