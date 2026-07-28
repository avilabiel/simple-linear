import { useState, type SubmitEvent } from "react";
import { LoginForm } from "@/ui/LoginForm";
import { signIn } from "@/services/auth/sign-in";
import { InvalidAuthError } from "@/services/exceptions/invalid-auth";

type LoginProps = {
  onSuccess: () => void;
};

type FieldErrors = {
  email?: string;
  password?: string;
};

function Login({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(undefined);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn(email.trim(), password);
      onSuccess();
    } catch (error) {
      if (error instanceof InvalidAuthError) {
        setFormError(error.message);
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      emailError={fieldErrors.email}
      passwordError={fieldErrors.password}
      formError={formError}
      isSubmitting={isSubmitting}
      onEmailChange={(value) => {
        setEmail(value);
        setFieldErrors((current) => ({ ...current, email: undefined }));
      }}
      onPasswordChange={(value) => {
        setPassword(value);
        setFieldErrors((current) => ({ ...current, password: undefined }));
      }}
      onSubmit={handleSubmit}
    />
  );
}

export { Login };
