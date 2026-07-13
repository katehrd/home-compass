import { JourneyStep } from "@/types/journey";

export const defaultJourney: JourneyStep[] = [
  {
    id: "review",
    title: "Review Listing",
    status: "Completed",
  },
  {
    id: "drive",
    title: "Drive Neighborhood",
    status: "Completed",
  },
  {
    id: "tour",
    title: "Tour Home",
    status: "Completed",
  },
  {
    id: "evaluate",
    title: "Evaluate Home",
    status: "In Progress",
  },
  {
    id: "realtor",
    title: "Talk to Realtor",
    status: "Not Started",
  },
  {
    id: "offer",
    title: "Decide on Offer",
    status: "Not Started",
  },
];