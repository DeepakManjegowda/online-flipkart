import { AnyAction } from "redux";
import { CART, COUNTER, UPDATE_ELEMENT } from "../Actions";
import ProductsProps from "../../config/products";

export interface ReducerInitialState {
  getCart: [];
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

    case UPDATE_ELEMENT:
      const updatedElements = state.getCart.map((element: any) => {
        console.log("elment id", action.payload);
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
      return {
        ...state,
        elements: updatedElements,
      };
    default:
      return state;
  }
}
