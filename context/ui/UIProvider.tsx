import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  // sidebar handler
  const setToogleMenu = (value: boolean) =>
    dispatch({ type: "[UI] - Set Toogle Menu", payload: value });

  // entry handler
  const setIsAddingEntry = (value: boolean) =>
    dispatch({ type: "[UI] - Set Adding Entry", payload: value });

  // dragging handler
  const setIsDragging = (value: boolean) =>
    dispatch({ type: "[UI] - Set Dragging Entry", payload: value });

  return (
    <UIContext.Provider
      value={{
        ...state,
        // sidebar
        setToogleMenu,
        // entry
        setIsAddingEntry,
        // dragging
        setIsDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
