export class Asset {
  private readonly token: string;
  private readonly quantity: number;

  constructor(token: string, quantity: number){
    this.token = token;
    this.quantity = quantity;
  }

  public getToken(): string{
      return this.token;
  }

  public getQuantity(): number{
    return this.quantity;
}
}
