import {createContext, useReducer, Dispatch} from "react";
import {ICategory} from "../types";

interface IMenu {
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
  isCartOpen: boolean;
  title?: string;
  navOptions: string[];
  categories: ICategory[];
}

interface ContextType {
  state: IMenu;
  dispatch: Dispatch<MenuAction>;
}

export const TOGGLE_MENU = "toggleMenu";
export const TOGGLE_SUBMENU = "toggleSubMenu";
export const TOGGLE_CART = "toggleCart";

const initialState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  isCartOpen: true,
  title: "",
  navOptions: [
    "Leather",
    "Eyewear",
    "Perfume",
    "Body care",
    "Home fragrance",
    "Accessories",
    "About",
  ],
  categories: [
    {title: "Explore", items: ["Best Sellers", "New Arrivals", "Gift Cards"]},
    {
      title: "Personal Fragrances",
      items: [
        "Perfumes",
        "Travel editions",
        "Hair Perfumes",
        "Roll-on perfumed oils",
        "Perfume extracts",
      ],
    },
    {
      title: "Scents",
      items: [
        "Bal d'afrique",
        "Biblioteque",
        "Blanche",
        "Eleventh Hour",
        "Gypsy Water",
        "La Tulipe",
        "Mojave Ghost",
        "Rose of No Man's Land",
        "Super Cedar",
        "Velvet Haze",
      ],
    },
  ],
};

type MenuAction =
  | {type: typeof TOGGLE_MENU}
  | {type: typeof TOGGLE_SUBMENU; payload?: string}
  | {type: typeof TOGGLE_CART};

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
        title: action.payload,
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};

const MenuState: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuContext.Provider value={{state, dispatch}}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuState;
