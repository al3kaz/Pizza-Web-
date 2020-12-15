import { useStateDispatch, CartItem } from "../AppState/AppState";

export interface CartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  deleteFromCart: (item: Omit<CartItem, "quantity">) => void;
}

export const useDeleteFromCart = () => {
  const dispatch = useStateDispatch();
  const deleteFromCart: CartProps["deleteFromCart"] = (item) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: {
        item,
      },
    });
  };

  return deleteFromCart;
};

export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: CartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };

  return addToCart;
};
