// react
import { createContext } from "react";
// interface
import { IEntry } from "../../interfaces/entry";

interface ContextProps {
  entries: IEntry[];

  // methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: IEntry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
