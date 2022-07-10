import { EntriesState } from "./";

type EntriesActionType =
| { type: "[Entries] - actionName" }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
      case "[Entries] - actionName":
        return {
          ...state,
        //   property : value,
        };

      default:
        return state;
    }
  };