export type PropertyStatus =
  | "Final Four"
  | "Tour"
  | "Watch"
  | "Rejected";

export interface Property {
  id: string;

  address: string;

  price: number;

  score: number;

  status: PropertyStatus;

  neighborhood: string;

  middleSchool: string;

  bedrooms: number;

  bathrooms: number;

  squareFeet: number;

  lotSize?: number;

  notes?: string;

  zillowUrl?: string;

  nextAction?: string;
}