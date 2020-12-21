import { useStateDispatch, CartItem } from "../AppState/AppState";

export interface CartProps {
  subtractFromCart: (item: Omit<CartItem, "quantity">) => void;
}

export const useSubtractFromCart = () => {
  const dispatch = useStateDispatch();
  const subtractFromCart: CartProps["subtractFromCart"] = (item) => {
    dispatch({
      type: "SUBTRACT_FROM_CART",
      payload: {
        item,
      },
    });
  };

  return subtractFromCart;
};
