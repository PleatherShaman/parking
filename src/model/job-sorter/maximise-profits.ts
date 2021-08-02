import { CarJobQuote, JobSummary, Sorter } from "../../interfaces/interfaces";
import { Employee } from "../employee";

export class MaximiseProfits implements Sorter {
  public constructor() {}

  public sort = (carJobQuotes: CarJobQuote[], employees: Employee[]): JobSummary[] => {
    const sortedJobQuotesByPriceDescending: CarJobQuote[] = carJobQuotes.sort(
      (a: CarJobQuote, b: CarJobQuote) => b.price - a.price
    );

    const sortedEmployeesByComissionAscending: Employee[] = employees.sort(
      (a: Employee, b: Employee) => a.getCommission() - b.getCommission()
    );

    const numberOfJobsPerEmployee: number[] = this.generateNumberOfJobsPerEmployee(
      carJobQuotes.length,
      employees.length
    );

    const jobSummaries: JobSummary[] = this.allocateJobsToEmployees(
      sortedJobQuotesByPriceDescending,
      sortedEmployeesByComissionAscending,
      numberOfJobsPerEmployee
    );

    return jobSummaries;
  };

  private generateNumberOfJobsPerEmployee = (
    numberOfJobs: number,
    numberOfEmployees: number
  ): number[] => {
    let numberOfJobsCounter: number = numberOfJobs;
    let numberOfEmployeesCounter: number = numberOfEmployees;
    let averageJobsPerEmployeeCounter: number = numberOfJobs / numberOfEmployees;

    const numberOfJobsPerEmployee: number[] = [];

    for (let i = 0; i < numberOfEmployees; i++) {
      let jobsAreEqualyDivisible: boolean = averageJobsPerEmployeeCounter % 1 === 0;
      if (jobsAreEqualyDivisible) {
        numberOfJobsPerEmployee.push(averageJobsPerEmployeeCounter);
        numberOfEmployeesCounter = numberOfEmployeesCounter - 1;
      } else {
        let roundedUpAverage: number = Math.ceil(averageJobsPerEmployeeCounter);
        numberOfJobsPerEmployee.push(roundedUpAverage);
        numberOfJobsCounter = numberOfJobsCounter - roundedUpAverage;
        numberOfEmployeesCounter = numberOfEmployeesCounter - 1;
        averageJobsPerEmployeeCounter = numberOfJobsCounter / numberOfEmployeesCounter;
      }
    }

    return numberOfJobsPerEmployee;
  };

  private allocateJobsToEmployees = (
    sortedJobs: CarJobQuote[],
    sortedEmployees: Employee[],
    numberOfJobsPerEmployee: number[]
  ): JobSummary[] => {
    let employeeTracker: number = 0;
    const jobSummaries: JobSummary[] = [];

    sortedJobs.map((jobQuote: CarJobQuote) => {
      let employeeNeedsJobsAllocated: boolean = numberOfJobsPerEmployee[employeeTracker] > 0;

      if (employeeNeedsJobsAllocated) {
        jobSummaries.push({
          licencePlate: jobQuote.licencePlate,
          employee: sortedEmployees[employeeTracker].getName(),
          fuelAdded: jobQuote.fuelAdded,
          price: jobQuote.price,
        });
        numberOfJobsPerEmployee[employeeTracker] = numberOfJobsPerEmployee[employeeTracker] - 1;
      } else {
        employeeTracker = employeeTracker + 1;
        jobSummaries.push({
          licencePlate: jobQuote.licencePlate,
          employee: sortedEmployees[employeeTracker].getName(),
          fuelAdded: jobQuote.fuelAdded,
          price: jobQuote.price,
        });
        numberOfJobsPerEmployee[employeeTracker] = numberOfJobsPerEmployee[employeeTracker] - 1;
      }
    });

    return jobSummaries;
  };
}
