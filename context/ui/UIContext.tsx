import { createContext } from "react";

interface ContextProps {
  // sidebar
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;

  // entry
  isAddingEntry: boolean;
  setIsAddingEntry: (value: boolean) => void;
}
export const UIContext = createContext({} as ContextProps);
