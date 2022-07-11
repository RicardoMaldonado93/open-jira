import { createContext } from "react";

interface ContextProps {
  // sidebar
  isSideMenuOpen: boolean;
  setToogleMenu: (value: boolean) => void;

  // entry
  isAddingEntry: boolean;
  setIsAddingEntry: (value: boolean) => void;

  // dragging
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}
export const UIContext = createContext({} as ContextProps);
