import { EntriesState } from "./";
import { IEntry } from "../../interfaces";

type EntriesActionType =
  | { type: "[Entry] - Add Entry"; payload: IEntry }
  | { type: "[Entry] - Updated Entry"; payload: IEntry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] - Add Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "[Entry] - Updated Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        }),
      };

    default:
      return state;
  }
};
