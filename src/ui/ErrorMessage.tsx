type ErrorMessageProps = {
  children: string;
};

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="error-message" role="alert">
      {children}
    </p>
  );
}

export { ErrorMessage };
