export const ADDCART = "ADDCART";
export const COUNTER = "COUNTER";
export const UPDATE_CART = "UPDATE_CART";
export const TOTAL_QUANTITY = "TOTAL_QUANTITY";

export function addCart(data: any) {
  return {
    type: ADDCART,
    payload: data,
  };
}

export function updateCounter(data: number) {
  return {
    type: COUNTER,
    payload: data,
  };
}

export const updateCart = (data: any) => {
  return {
    type: UPDATE_CART,
    payload: data,
  };
};
export const updateQuantity = (data: number) => {
  return {
    type: TOTAL_QUANTITY,
    payload: data,
  };
};
