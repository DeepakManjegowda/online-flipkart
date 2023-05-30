import { AnyAction } from "redux";
import { ADDCART, COUNTER, UPDATE_CART, TOTAL_QUANTITY } from "../Actions";
import ProductsProps from "../../config/products";

export interface ReducerInitialState {
  getCart: [];
  counter: number;
  totalQuantity: number;
}

const initialState: ReducerInitialState = {
  getCart: [],
  counter: 0,
  totalQuantity: 0,
};
export default function GlobalReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADDCART:
      return { ...state, getCart: action.payload };
    case COUNTER:
      return { ...state, counter: action.payload };

    case UPDATE_CART:
      return {
        ...state,
        getCart: action.payload,
      };
    case TOTAL_QUANTITY: {
      return { ...state, totalQuantity: action.payload };
    }
    default:
      return state;
  }
}
