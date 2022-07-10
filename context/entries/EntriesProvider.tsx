// react
import { FC, ReactNode, useReducer } from "react";
// entries
import { EntriesContext, entriesReducer } from "./";
// interfaces
import { IEntry } from "../../interfaces/entry";
// uuid
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: IEntry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Anim nisi eiusmod irure voluptate qui sit minim minim nisi.",
      status: "to-do",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Non quis cillum aliquip do commodo pariatur fugiat incididunt velit incididunt dolore.",
      status: "in-progress",
      createAt: Date.now() - 1000000000,
    },
    {
      _id: uuidv4(),
      description:
        "Ex ipsum sit et ad commodo esse cillum sit cupidatat cillum sint qui laborum.",
      status: "done",
      createAt: Date.now() - 3000,
    },
  ],
};

interface EntriesProviderProps {
  children: ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
