// User Entity

import { UserRole } from './UserRole';
import { SubscriptionStatus } from './SubscriptionStatus';

export type User = {
  id: number;
  email: string;
  password: string;
  role: UserRole;
  subscriptionStatus: SubscriptionStatus;
  createdAt: Date;
  modifiedAt: Date;
};
