import type { Role } from "./role";
import type { Permission } from "./permission";
import type { Workspace } from "./workspace";

interface User {
  id: string;
  fullname: string;
  email: string;
  workspace?: Workspace;
  roles?: Role[];
  permissions?: Permission[];
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
}

export type { User };
