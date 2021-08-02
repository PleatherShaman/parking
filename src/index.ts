import { cars } from "./data/cars";
import { CarPark } from "./model/carpark";
import { PriceCalculator } from "./model/price-calculator/price-calculator";

let carpark: CarPark = new CarPark(cars, PriceCalculator.STANDARD);

carpark.operate();
