import { API_URL } from "../constants";
import { AppConnectionError } from "../exceptions/app-connection-error";
import type { Task } from "@/types/task";
import { ValidationError } from "../exceptions/validation-error";

async function createTask(title: string, description: string): Promise<Task> {
  // TODO: Apply the right validation here soon

  if (title.length < 3) {
    throw new ValidationError("Title must be at least 3 characters long");
  }

  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    throw new AppConnectionError("Failed to create task");
  }

  const data = await response.json();
  return data as Task;
}

export { createTask };
