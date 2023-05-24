export const CART = "CART";
export const COUNTER = "COUNTER";

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
