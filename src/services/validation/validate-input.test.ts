import { ValidationError } from "@/services/exceptions/validation-error";
import { maxLength, minLength, required } from "./validate-input";
import { describe, it, expect } from "vitest";

describe("validateInput", () => {
  describe("required", () => {
    it("should throw a validation error if the value is undefined", () => {
      expect(() => required()(undefined)).toThrow(ValidationError);
    });

    it("should throw a validation error if the value is null", () => {
      expect(() => required()(null)).toThrow(ValidationError);
    });

    it("should throw a validation error if the value is an empty string", () => {
      expect(() => required()("")).toThrow(ValidationError);
    });
  });

  describe("minLength", () => {
    it("should throw a validation error if the value is less than the minimum length", () => {
      expect(() => minLength(3)("12")).toThrow(ValidationError);
    });

    it("should return the value if it is greater than the minimum length", () => {
      expect(minLength(3)("123")).toBe("123");
    });
  });

  describe("maxLength", () => {
    it("should throw a validation error if the value is greater than the maximum length", () => {
      expect(() => maxLength(3)("1234")).toThrow(ValidationError);
    });

    it("should return the value if it is equal to the maximum length", () => {
      expect(maxLength(3)("123")).toBe("123");
    });

    it("should return the value if it is less than the maximum length", () => {
      expect(maxLength(3)("12")).toBe("12");
    });
  });

  describe("compound validation", () => {
    describe("required and minLength", () => {
      it("should throw a validation error if the value is undefined and less than the minimum length", () => {
        expect(() => required()(minLength(3)("12"))).toThrow(ValidationError);
      });
    });

    describe("required and maxLength", () => {
      it("should throw a validation error if the value is undefined and greater than the maximum length", () => {
        expect(() => required()(maxLength(3)("1234"))).toThrow(ValidationError);
      });

      it("should return the value if it is defined and equal to the maximum length", () => {
        expect(required()(maxLength(3)("123"))).toBe("123");
      });
    });

    describe("minLength and maxLength", () => {
      it("should throw a validation error if the value is less than the minimum length and greater than the maximum length", () => {
        expect(() => minLength(3)(maxLength(3)("12"))).toThrow(ValidationError);
      });
    });
  });
});
