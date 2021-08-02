import { cars } from "./data/cars";
import { CarPark } from "./model/carpark";
import { Employee } from "./model/employee";
import { JobSorter } from "./model/job-sorter/job-sorter";
import { PriceCalculator } from "./model/price-calculator/price-calculator";

const employees: Employee[] = [new Employee("Employee A", 0.11), new Employee("employee B", 0.15)];

let carpark: CarPark = new CarPark(cars, PriceCalculator.STANDARD, employees, JobSorter.MAXIMISE_PROFITS);


carpark.operate();
