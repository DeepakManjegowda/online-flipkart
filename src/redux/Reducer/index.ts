import { AnyAction } from "redux";
import { CART, COUNTER } from "../Actions";
import ProductsProps from "../../config/products";

export interface ReducerInitialState {
  getCart: ProductsProps[];
  counter: number;
}

const initialState: ReducerInitialState = {
  getCart: [],
  counter: 0,
};
export default function GlobalReducer(state = initialState, action: any) {
  switch (action.type) {
    case CART:
      return { ...state, getCart: action.payload };
    case COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
