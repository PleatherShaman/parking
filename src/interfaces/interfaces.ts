export interface CarJob {
  licencePlate: string;
  size: string;
  fuel: FuelData;
}

export interface FuelData {
  capacity: number;
  level: number;
}
