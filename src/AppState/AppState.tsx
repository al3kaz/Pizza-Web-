import React, { createContext, useContext, useEffect, useReducer } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);
export const AppDispatchContext = createContext<
  | React.Dispatch<
      AddToCartAction | DeleteFromCartAction | SubtractFromCartAction
    >
  | undefined
>(undefined);

interface Action<T> {
  type: T;
}
interface AddToCartAction extends Action<"ADD_TO_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

interface SubtractFromCartAction extends Action<"SUBTRACT_FROM_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

interface DeleteFromCartAction extends Action<"DELETE_FROM_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

interface InitializeCartAction extends Action<"INITITIALIZE_CART"> {
  payload: {
    cart: AppStateValue["cart"];
  };
}

const reducer = (
  state: AppStateValue,
  action:
    | AddToCartAction
    | InitializeCartAction
    | DeleteFromCartAction
    | SubtractFromCartAction
) => {
  if (action.type === "ADD_TO_CART") {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  } else if (action.type === "SUBTRACT_FROM_CART") {
    const itemToSubtract = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToSubtract.id
    );
    return {
      ...state,
      cart: {
        ...state,
        items: state.cart.items.map((item) => {
          if (
            item.id === itemToSubtract.id &&
            itemExists &&
            itemExists.quantity > 1
          ) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      },
    };
  } else if (action.type === "DELETE_FROM_CART") {
    const itemToDelete = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToDelete.id
    );
    return {
      ...state,
      cart: {
        ...state,
        items: itemExists
          ? state.cart.items
              .filter((item) => item.id !== itemToDelete.id)
              .map((item) => {
                return { ...item };
              })
          : [...state.cart.items],
      },
    };
  } else if (action.type === "INITITIALIZE_CART") {
    return { ...state, cart: action.payload.cart };
  }

  return state;
};

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      "useStateDispatch was called outside of the AppDispatchContext provider"
    );
  }
  return dispatch;
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({
        type: "INITITIALIZE_CART",
        payload: { cart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const TotalCount = () => {
  const context = useContext(AppStateContext);
  const Count = context.cart.items.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return Count;
};

export default AppStateProvider;
