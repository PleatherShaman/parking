export class Employee {
  private _name: string;
  private _commission: number;

  public constructor(name: string, commission: number) {
    this._name = name;
    this._commission = commission;
  }

  public getName(): string {
    return this._name;
  }

  public getCommission(): number {
    return this._commission;
  }
}
