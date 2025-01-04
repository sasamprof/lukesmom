import { SubscriptionStatus } from '../../entities/SubscriptionStatus';
import { UserRole } from '../../entities/UserRole';

export interface CreateUserDTO {
  email: string;
  password: string;
  role: UserRole;
  subscriptionStatus: SubscriptionStatus;
}
