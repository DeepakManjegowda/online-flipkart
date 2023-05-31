import { AnyAction } from "redux";
import {
  ADDCART,
  COUNTER,
  UPDATE_CART,
  TOTAL_QUANTITY,
  UPDATE_SAVELATER,
  SAVELATER_TOCART,
  REMOVE_CART,
} from "../Actions";
import ProductsProps from "../../config/products";

export interface ReducerInitialState {
  getCart: ProductsProps[];
  saveLater: ProductsProps[];
  counter: number;
  totalQuantity: number;
}

const initialState: ReducerInitialState = {
  getCart: [],
  saveLater: [],
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
    case UPDATE_SAVELATER: {
      const itemId = action.payload;
      const itemToMove = state.getCart.find((item: any) => item.id === itemId);
      if (itemToMove) {
        return {
          ...state,
          getCart: state.getCart.filter((item: any) => item.id !== itemId),
          saveLater: [...state.saveLater, itemToMove],
        };
      }
      return state;
    }
    case SAVELATER_TOCART: {
      const itemId = action.payload;
      const itemToMove = state.saveLater.find(
        (item: any) => item.id === itemId
      );
      if (itemToMove) {
        return {
          ...state,
          saveLater: state.saveLater.filter((item: any) => item.id !== itemId),
          getCart: [...state.getCart, itemToMove],
        };
      }
      return state;
    }
    case REMOVE_CART: {
      if (action.payload === "cart") {
        return {
          ...state,
          getCart: state.getCart.filter(
            (item: any) => item.id !== action.payload2
          ),
        };
      } else {
        return {
          ...state,
          saveLater: state.saveLater.filter(
            (item: any) => item.id !== action.payload2
          ),
        };
      }
    }
    default:
      return state;
  }
}
