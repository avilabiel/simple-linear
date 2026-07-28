import type { User } from "./user";

interface Task {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdBy: User;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
}

export type { Task };
