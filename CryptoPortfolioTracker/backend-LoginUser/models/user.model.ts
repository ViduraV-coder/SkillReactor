import { createHash } from 'node:crypto';

export class User {

  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
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

  getPassword(): string {
    return this.password;
  }
}
