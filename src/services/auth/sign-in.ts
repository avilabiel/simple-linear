import { InvalidAuthError } from "../exceptions/invalid-auth";

export const signIn = async (
  email: string,
  password: string,
): Promise<boolean> => {
  // TODO: Implement sign in later with Clerk, for now hard coded

  if (email !== "gabriel@example.com" || password !== "123456") {
    throw new InvalidAuthError("Invalid email or password");
  }

  return true;
};
