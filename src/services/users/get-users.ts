import type { User } from "@/types/user";
import { API_URL } from "@/services/constants";
import { AppConnectionError } from "@/services/exceptions/app-connection-error";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new AppConnectionError("Failed to fetch users");
  }

  const data = (await response.json()) as User[];
  return data;
};
