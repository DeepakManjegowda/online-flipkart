export const ADDCART = "ADDCART";
export const COUNTER = "COUNTER";
export const UPDATE_CART = "UPDATE_CART";
export const TOTAL_QUANTITY = "TOTAL_QUANTITY";
export const UPDATE_SAVELATER = "UPDATE_SAVELATER";
export const SAVELATER_TOCART = "SAVELATER_TOCART";
export const REMOVE_CART = "REMOVE_CART";

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
export const updateSaveLater = (itemId: any) => {
  return {
    type: UPDATE_SAVELATER,
    payload: itemId,
  };
};
export const saveLaterToCart = (itemId: any) => {
  return {
    type: SAVELATER_TOCART,
    payload: itemId,
  };
};

export const removeCart = (remType: string, itemId: number) => {
  return {
    type: REMOVE_CART,
    payload: remType,
    payload2: itemId,
  };
};
