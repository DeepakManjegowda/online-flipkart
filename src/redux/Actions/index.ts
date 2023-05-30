export const CART = "CART";
export const COUNTER = "COUNTER";
export const UPDATE_ELEMENT = "UPDATE_ELEMENT";

export function updateCart(data: any) {
  return {
    type: CART,
    payload: data,
  };
}

export function updateCounter(data: number) {
  return {
    type: COUNTER,
    payload: data,
  };
}
export const updateElement = (data: any) => {
  return {
    type: UPDATE_ELEMENT,
    payload: data,
  };
};
