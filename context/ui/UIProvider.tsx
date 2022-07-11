import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  // sidebar handler
  const openSideMenu = () => dispatch({ type: "[UI] - Open Sidebar" });
  const closeSideMenu = () => dispatch({ type: "[UI] - Close Sidebar" });
  
  // entry handler
  const setIsAddingEntry = (value: boolean) =>
    dispatch({ type: "[UI] - Set Adding Entry", payload: value });

  return (
    <UIContext.Provider
      value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry }}
    >
      {children}
    </UIContext.Provider>
  );
};
