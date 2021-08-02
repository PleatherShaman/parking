import { JobSummary, OutputSummary } from "../../interfaces/interfaces";

export class LogData implements OutputSummary {
  public constructor() {}

  public output = (carJobQuotes: JobSummary[]) => {
    console.log(carJobQuotes);
  };
}
