import {createContext, useReducer, Dispatch, useContext} from "react";
import {ICategory} from "../types";

interface INav {
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  activeNavOption: string;
  navOptions: string[];
  categories: ICategory[];
}

export const TOGGLE_MENU = "toggleMenu";
export const TOGGLE_SUBMENU = "toggleSubMenu";
export const TOGGLE_CART = "toggleCart";
export const TOGGLE_SEARCH = "toggleSearch";
export const SET_NAV_OPTION = "setNavOption";

type NavAction =
  | {type: typeof TOGGLE_MENU}
  | {type: typeof TOGGLE_SUBMENU}
  | {type: typeof TOGGLE_CART}
  | {type: typeof TOGGLE_SEARCH}
  | {type: typeof SET_NAV_OPTION; payload: string};

interface ContextType {
  state: INav;
  dispatch: Dispatch<NavAction>;
}

const initialState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  isCartOpen: false,
  isSearchOpen: false,
  activeNavOption: "All",
  navOptions: [
    "All",
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

export const NavContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => initialState,
});

const NavReducer = (state: INav, action: NavAction): INav => {
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
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };
    case SET_NAV_OPTION:
      return {
        ...state,
        activeNavOption: action.payload,
      };
    default:
      return state;
  }
};

const NavState: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(NavReducer, initialState);

  return (
    <NavContext.Provider value={{state, dispatch}}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavState = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("nav state can only be accessed within navstate provider");
  }
  return context;
};

export default NavState;
