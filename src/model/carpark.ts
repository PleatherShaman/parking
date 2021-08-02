import { Calculator, CarJob, CarJobQuote, OutputSummary, Sorter } from "../interfaces/interfaces";
import { Employee } from "./employee";

export class CarPark {
  private _carJobs: CarJob[];
  private _priceCalculation: Calculator;
  private _employee: Employee[];
  private _jobSorter: Sorter;
  private _summaryStrategy: OutputSummary;

  constructor(
    carJobs: CarJob[],
    priceCalculation: Calculator,
    employees: Employee[],
    jobSorter: Sorter,
    summaryStrategy: OutputSummary,
  ) {
    this._carJobs = carJobs;
    this._priceCalculation = priceCalculation;
    this._employee = employees;
    this._jobSorter = jobSorter;
    this._summaryStrategy = summaryStrategy
  }

  public operate(): void {
    const carJobQuotes: CarJobQuote[] = this._priceCalculation.calculate(this._carJobs);
    const sortedJobs = this._jobSorter.sort(carJobQuotes, this._employee);
    this._summaryStrategy.output(sortedJobs);
  }
}
