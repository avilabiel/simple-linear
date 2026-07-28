import type { User } from "@/types/user";
import { API_URL } from "@/services/constants";

interface GetUsersResponse {
  data: User[];
}

export const getUsers = async (): Promise<GetUsersResponse> => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};
