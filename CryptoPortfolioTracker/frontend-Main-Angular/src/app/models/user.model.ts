export class User {

  private readonly username:string;
  private readonly email:string;
  private readonly password:string;

  constructor(username: string, email: string, password: string){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public getName(): string {
    return this.username;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

}

