export type JourneyStatus =
  | "Not Started"
  | "In Progress"
  | "Completed";

export interface JourneyStep {
  id: string;

  title: string;

  status: JourneyStatus;
}