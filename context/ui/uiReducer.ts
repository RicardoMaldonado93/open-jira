import { UIState } from "./";

type UIActionType =
  // sidebar
  | { type: "[UI] - Set Toogle Menu"; payload: boolean }
  // entry
  | { type: "[UI] - Set Adding Entry"; payload: boolean }
  // drag
  | { type: "[UI] - Set Dragging Entry"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    // sidebar
    case "[UI] - Set Toogle Menu":
      return {
        ...state,
        isSideMenuOpen: action.payload,
      };

    // entry
    case "[UI] - Set Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    // dragging
    case "[UI] - Set Dragging Entry":
      return {
        ...state,
        isDragging: action.payload,
      };

    default:
      return state;
  }
};
