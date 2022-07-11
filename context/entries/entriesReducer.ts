import { EntriesState } from "./";
import { IEntry } from "../../interfaces";

type EntriesActionType = { type: "[Entry] - Add Entry"; payload: IEntry };

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

    default:
      return state;
  }
};
