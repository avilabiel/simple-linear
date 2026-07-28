class AppConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppConnectionError";
  }
}

export { AppConnectionError };
