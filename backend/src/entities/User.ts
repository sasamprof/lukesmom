// User Entity

import { UserRole } from './UserRole';
type User = {
  id: number;
  email: string;
  password: string;
  role: UserRole;
  subscriptionStatus: 'free' | 'paid';
  createdAt: Date;
  updatedAt: Date;
};
