import { UserRepository } from './UserRepository';
import { User } from '../../entities/User';
import { CreateUserDTO } from './CreateUserDTO';
import bcrypt from 'bcryptjs';

export class CreateUser {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async execute(data: CreateUserDTO): Promise<User> {
    if (!this.isValidEmail(data.email)) {
      throw new Error('Invalid email address');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await this.userRepo.create({
      ...data,
      id: 0,
      password: hashedPassword,
      createdAt: new Date(),
      modifiedAt: new Date(),
    });

    return newUser;
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
}
