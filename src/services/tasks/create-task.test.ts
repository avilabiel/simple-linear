import { expect, describe, test, afterEach, vi } from "vitest";
import { ValidationError } from "../exceptions/validation-error";
import { createTask } from "./create-task";

describe("createTask", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  test("should create a task", async () => {
    const task = await createTask("Test Task", "This is a test task");
    expect(task).toBeDefined();
  });

  test("should throw a validation error when the title is less than 3 characters", async () => {
    await expect(createTask("Te", "This is a test task")).rejects.toThrow(
      ValidationError,
    );
  });
});
