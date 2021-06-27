import {createContext, useState, useReducer, Dispatch} from "react";

interface IMenu {
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
}

type ContextType = {
  state: IMenu;
  dispatch: Dispatch<MenuAction>;
};

export const TOGGLE_MENU = "toggleMenu";
export const TOGGLE_SUBMENU = "toggleSubMenu";

const initialState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
};

type MenuAction = {type: typeof TOGGLE_MENU} | {type: typeof TOGGLE_SUBMENU};

export const MenuContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => initialState,
});

const MenuReducer = (state: IMenu, action: MenuAction): IMenu => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case TOGGLE_SUBMENU:
      return {
        ...state,
        isSubMenuOpen: !state.isSubMenuOpen,
      };
    default:
      return state;
  }
};

const SideMenuState: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuContext.Provider value={{state, dispatch}}>
      {children}
    </MenuContext.Provider>
  );
};

export default SideMenuState;
