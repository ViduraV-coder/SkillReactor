export class User {

  private username: string;

  constructor(username: string) {
    this.username = username;
  }
  getName(): string {
    return this.username;
  }

}
