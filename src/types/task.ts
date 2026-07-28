interface Task {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
}

export type { Task };
