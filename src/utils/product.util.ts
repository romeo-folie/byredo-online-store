import {IProduct, ICartItem} from "../context/product.state";

export const addProductToCart = (
  cartItems: ICartItem[],
  cartItemToAdd: IProduct
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeProductFromCart = (
  cartItems: ICartItem[],
  cartItemToRemove: IProduct
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  );
};

export const clearProductFromCart = (
  cartItems: ICartItem[],
  idToRemove: string
): ICartItem[] => {
  return cartItems.filter((item) => item.id !== idToRemove);
};

export const filterByCategory = (
  products: IProduct[],
  category: string
): IProduct[] => {
  if (category.toLowerCase() === "all") return products;

  return products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const getTotalPrice = (cartItems: ICartItem[]) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const filterBySearch = (
  products: IProduct[],
  input: string
): IProduct[] => {
  if (input === "") {
    return [];
  }

  return products.filter(
    (prod) =>
      prod.name.toLowerCase().includes(input.toLowerCase()) ||
      prod.category.toLowerCase().includes(input.toLowerCase())
  );
};
