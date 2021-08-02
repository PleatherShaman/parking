import { Calculator, CarJob, CarJobQuote, Sorter } from "../interfaces/interfaces";
import { Employee } from "./employee";

export class CarPark {
  private _carJobs: CarJob[];
  private _priceCalculation: Calculator;
  private _employee: Employee[];
  private _jobSorter: Sorter;

  constructor(
    carJobs: CarJob[],
    priceCalculation: Calculator,
    employees: Employee[],
    jobSorter: Sorter
  ) {
    this._carJobs = carJobs;
    this._priceCalculation = priceCalculation;
    this._employee = employees;
    this._jobSorter = jobSorter;
  }

  public operate(): void {
    const carJobQuotes: CarJobQuote[] = this._priceCalculation.calculate(this._carJobs);
    const sortedJobs = this._jobSorter.sort(carJobQuotes, this._employee);
  }
}
