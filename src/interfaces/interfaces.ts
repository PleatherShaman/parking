import { Employee } from "../model/employee";

export interface CarJob {
  licencePlate: string;
  size: string;
  fuel: FuelData;
}

export interface FuelData {
  capacity: number;
  level: number;
}

export interface CarJobQuote {
  licencePlate: string;
  price: number;
  fuelAdded: number;
}

export type PriceCalculationStrategy = (carJobs: CarJob[]) => CarJobQuote[];

export interface Calculator {
  calculate: PriceCalculationStrategy;
}

export type JobSortingStrategy = (
  carJobQuotes: CarJobQuote[],
  employees: Employee[]
) => JobSummary[];

export interface Sorter {
  sort: JobSortingStrategy;
}

export interface JobSummary {
  licencePlate: string;
  employee: string;
  fuelAdded: number;
  price: number;
}
