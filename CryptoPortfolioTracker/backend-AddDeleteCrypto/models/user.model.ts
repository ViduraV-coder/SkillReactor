export class User {
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  getName(): string {
    return this.username;
  }
}
