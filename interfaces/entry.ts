export interface IEntry {
  _id: string;
  description: string;
  createAt: number;
  status: EntryStatus;
}

export type EntryStatus = "to-do" | "in-progress" | "done";
