import {
  createContext,
  useReducer,
  Dispatch,
  useContext,
  useEffect,
} from "react";
import {
  addProductToCart,
  removeProductFromCart,
  filterByCategory,
  clearProductFromCart,
} from "../utils/product.util";
import db from "../services/firebase/firestore";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  type: string;
  category: string;
  size?: string;
  url: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

interface IState {
  products: IProduct[];
  filteredProducts: IProduct[];
  activeProduct: IProduct;
  cart: ICartItem[];
  loading: boolean;
}

export const SET_PRODUCTS = "setProducts";
export const SET_ACTIVE_PRODUCT = "setActiveProduct";
export const FILTER_PRODUCTS = "filterProducts";
export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const CLEAR_FROM_CART = "clearFromCart";
export const CLEAR_CART = "clearCart";
export const SET_LOADING = "setLoading";

type ProductAction =
  | {type: typeof SET_PRODUCTS; payload: IProduct[]}
  | {type: typeof SET_ACTIVE_PRODUCT; payload: IProduct}
  | {type: typeof FILTER_PRODUCTS; payload: string}
  | {type: typeof ADD_TO_CART; payload: IProduct}
  | {type: typeof REMOVE_FROM_CART; payload: IProduct}
  | {type: typeof CLEAR_FROM_CART; payload: string}
  | {type: typeof CLEAR_CART}
  | {type: typeof SET_LOADING; payload: boolean};

interface ContextType {
  productState: IState;
  productDispatch: Dispatch<ProductAction>;
}

const initialState: IState = {
  products: [],
  filteredProducts: [],
  activeProduct: {} as IProduct,
  cart: [],
  loading: false,
};

export const ProductContext = createContext<ContextType>({
  productState: initialState,
  productDispatch: () => initialState,
});

const ProductReducer = (state: IState, action: ProductAction): IState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: filterByCategory(state.products, action.payload),
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: addProductToCart(state.cart, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeProductFromCart(state.cart, action.payload),
      };
    case CLEAR_FROM_CART:
      return {
        ...state,
        cart: clearProductFromCart(state.cart, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const ProductState: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({type: SET_LOADING, payload: true});
      const response = await db.collection("products").get();
      const products = response.docs.map((doc) => {
        const {id} = doc;
        const {name, price, type, category, size, url} = doc.data();

        return {
          id,
          name,
          price,
          type,
          category,
          size,
          url,
        };
      });
      dispatch({type: SET_PRODUCTS, payload: products});
      // dispatch({type: SET_LOADING, payload: false});
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{productState: state, productDispatch: dispatch}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductState = () => useContext(ProductContext);

export default ProductState;
