import { createHash } from 'node:crypto';
import * as dotenv from 'dotenv';

dotenv.config();
export class User {

  private username: string;
  private email: string;
  private password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = this.encrypt(password);
  }

  private encrypt = (password : string) => {

    return(createHash('sha256')
      .update(password)
      .digest('hex'));
  };

  getName(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }
}
