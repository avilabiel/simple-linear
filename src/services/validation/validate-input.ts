// chained validation like zod or yup
/* We must cover this:

required()  ✅
min(n) / max(n) — string length (and number range if you want) ✅
email() — regex-based
pattern(regex) — for the slug format
oneOf([...]) — for enums (priority, role)
date() — valid date, optionally "not in the past"
array(elementSchema) with min/max count — for tags
object({...}) — nested
*/

import type { ValidationRule } from "@/types/validation-rule";
import { ValidationError } from "@/services/exceptions/validation-error";

function required<T>(): ValidationRule<T> {
  return (value) => {
    if (value === undefined || value === null || value === "") {
      throw new ValidationError("This field is required");
    }
    return value;
  };
}

function minLength(min: number): ValidationRule<string> {
  return (value) => {
    if (typeof value !== "string") {
      throw new ValidationError("This field must be a string");
    }

    if (value.length < min) {
      throw new ValidationError(
        `This field must be at least ${min} characters long`,
      );
    }

    return value;
  };
}

function maxLength(max: number): ValidationRule<string> {
  return (value) => {
    if (typeof value !== "string") {
      throw new ValidationError("This field must be a string");
    }

    if (value.length > max) {
      throw new ValidationError(
        `This field must be at most ${max} characters long`,
      );
    }

    return value;
  };
}

// TODO: continue with the rest of the validation rules

export { required, minLength, maxLength };
