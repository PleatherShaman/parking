import { Calculator, CarJob, CarJobQuote } from "../interfaces/interfaces";

export class CarPark {
  private _carJobs: CarJob[];
  private _priceCalculation: Calculator;

  constructor(carJobs: CarJob[], priceCalculation: Calculator) {
    this._carJobs = carJobs;
    this._priceCalculation = priceCalculation;
  }

  public operate(): void {
    const carJobQuotes: CarJobQuote[] = this._priceCalculation.calculate(this._carJobs);
  }
}
