// react
import { createContext } from "react";
// interface
import { IEntry } from "../../interfaces/entry";

interface ContextProps {
  entries: IEntry[];

  // methods
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);
