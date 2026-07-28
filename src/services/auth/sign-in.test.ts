import { expect, describe, it } from "vitest";
import { signIn } from "./sign-in";
import { InvalidAuthError } from "../exceptions/invalid-auth";

describe("signIn", () => {
  describe("when the email and password are correct", () => {
    it("should return true", async () => {
      const result = await signIn("gabriel@example.com", "123456");
      expect(result).toBe(true);
    });
  });

  describe("when the email and password are incorrect", () => {
    it("should throw an error", async () => {
      await expect(
        signIn("gabriel@example.com", "wrong-password"),
      ).rejects.toThrow(InvalidAuthError);
    });
  });
});
