import type { SubmitEvent } from "react";
import { Field } from "@/ui/Field";
import { ErrorMessage } from "@/ui/ErrorMessage";
import "./LoginForm.css";

type LoginFormProps = {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
  formError?: string;
  isSubmitting?: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
};

function LoginForm({
  email,
  password,
  emailError,
  passwordError,
  formError,
  isSubmitting = false,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <h1>Login</h1>

      {formError ? <ErrorMessage>{formError}</ErrorMessage> : null}

      <Field label="Email" error={emailError}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          aria-invalid={Boolean(emailError)}
          autoComplete="email"
        />
      </Field>

      <Field label="Password" error={passwordError}>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          aria-invalid={Boolean(passwordError)}
          autoComplete="current-password"
        />
      </Field>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

export { LoginForm };
