interface Role {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
}

export type { Role };
