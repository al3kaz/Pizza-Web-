import { useStateDispatch, CartItem } from "../AppState/AppState";

export interface CartProps {
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
