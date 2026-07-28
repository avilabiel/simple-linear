interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
}

export type { Permission };
