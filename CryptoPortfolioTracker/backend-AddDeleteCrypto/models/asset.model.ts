export class Asset {
  private readonly token: string;
  private readonly quantity: string;

  constructor(token: string, quantity: string) {
    this.token = token;
    this.quantity = quantity;
  }

  getToken(): string {
    return this.token;
  }

  getQuantity(): string {
    return this.quantity;
  }
}
