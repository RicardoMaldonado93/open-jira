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
        "todo - Anim nisi eiusmod irure voluptate qui sit minim minim nisi.",
      status: "to-do",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "In Progress - Non quis cillum aliquip do commodo pariatur fugiat incididunt velit incididunt dolore.",
      status: "in-progress",
      createAt: Date.now() - 1000000000,
    },
    {
      _id: uuidv4(),
      description:
        "done - Ex ipsum sit et ad commodo esse cillum sit cupidatat cillum sint qui laborum.",
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

  const addNewEntry = (description: string) => {
    const NewEntry: IEntry = {
      description,
      _id: uuidv4(),
      createAt: Date.now(),
      status: "to-do",
    };

    dispatch({ type: "[Entry] - Add Entry", payload: NewEntry });
  };

  const updateEntry = (entry: IEntry) =>
    dispatch({ type: "[Entry] - Updated Entry", payload: entry });

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
