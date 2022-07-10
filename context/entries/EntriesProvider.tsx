import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./"

export interface EntriesState {
  entries: [];
}

const Entries_INITIAL_STATE: EntriesState =  {
  entries: [],
}

interface EntriesProviderProps {
  children: ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  return (
     <EntriesContext.Provider value={{ ...state }}>
        {children}
     </EntriesContext.Provider>
  )
}