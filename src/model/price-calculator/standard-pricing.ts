const math = require("mathjs");
import {
  FUEL_PRICE,
  FUEL_REFILL_THRESHOLD,
  LARGE_CAR_COST,
  SMALL_CAR_COST,
} from "../../data/constants";
import { CarSize } from "../../interfaces/enums";
import { Calculator, CarJob, CarJobQuote } from "../../interfaces/interfaces";

export class StandardPricing implements Calculator {
  public constructor() {}

  public calculate = (carJobs: CarJob[]): CarJobQuote[] => {
    const carJobQuotes: CarJobQuote[] = [];
    carJobs.map((carJob: CarJob): void => {
      const carParkingCost: number = this.findCarParkingCost(carJob.size);
      const amountOfFuelToAdd: number = this.determineFuelToAdd(carJob);
      const additionalRefuelCost: number = amountOfFuelToAdd * FUEL_PRICE;
      carJobQuotes.push({
        licencePlate: carJob.licencePlate,
        price: math.round(carParkingCost + additionalRefuelCost, 2),
        fuelAdded: amountOfFuelToAdd,
      });
    });

    return carJobQuotes;
  };

  private findCarParkingCost = (carSize: string): number => {
    switch (carSize) {
      case CarSize.SMALL:
        return SMALL_CAR_COST;
      case CarSize.LARGE:
        return LARGE_CAR_COST;
      default:
        throw new Error(`Cannot find car size of type ${carSize}`);
    }
  };

  private determineFuelToAdd = (carJob: CarJob): number => {
    const requiresFuelRefill: boolean = carJob.fuel.level <= FUEL_REFILL_THRESHOLD;
    const amountOfFuelToAdd: number =
      carJob.fuel.capacity - carJob.fuel.capacity * carJob.fuel.level;

    if (requiresFuelRefill) {
      return math.round(amountOfFuelToAdd, 2);
    } else {
      return 0;
    }
  };
}
