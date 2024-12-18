import { Campaign } from "./calendar";

export const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

export const DUMMY_CAMPAIGN: Record<string, Campaign> = {
  1: { label: "Campaign idea 1", variant: "yellow" },
  2: { label: "Campaign idea 2", variant: "yellow" },
  3: { label: "Campaign idea 3", variant: "red" },
};
