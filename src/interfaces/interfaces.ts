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
