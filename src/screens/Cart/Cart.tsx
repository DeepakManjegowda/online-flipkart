import { useDispatch, useSelector } from "react-redux";
import no_cart from "../../assets/images/cart-empty.png";
import ProductsProps from "../../config/products";
import {
  updateSaveLater,
  updateCart,
  saveLaterToCart,
  removeCart,
} from "../../redux/Actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../config/data";
import SnackBar from "../../components/SnackBar/SnackBar";

const Cart = () => {
  const [isRemove, setIsRemove] = useState(false);
  const [removeElement, setRemoveElement] = useState(0);
  const [removeType, setRemoveType] = useState("");
  const [showToast, setShowToast] = useState({ val: false, msg: "" });

  const navigate = useNavigate();
  const getcart: ProductsProps[] = useSelector((state: any) => state.getCart);
  const saveLater: any = useSelector((state: any) => state.saveLater);
  var actualTotalPrice = 0;
  var totalPrice = 0;
  const dispatch = useDispatch();
  const cartHandler = (cartItem: any, typeCart: string) => {
    const updatedCart = getcart.map((item: any) => {
      if (cartItem.id === item.id) {
        if (typeCart === "add") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else if (typeCart === "remove" && cartItem.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    dispatch(updateCart(updatedCart));
  };

  const saveLaterHandler = (cartItem: any) => {
    dispatch(updateSaveLater(cartItem.id));
    setShowToast({
      val: true,
      msg: `'${cartItem.product_name}' has been Saved for later'`,
    });
  };
  const movetToCartHandler = (cartItemId: number) => {
    dispatch(saveLaterToCart(cartItemId));
  };
  const handleChange = (item: any) => {
    navigate(`/product/${item.id}/${item.category}`);
  };
  const removeHandler = () => {
    const product: any = products.find((obj) => obj.id === removeElement)!;
    product.quantity = 0;
    dispatch(removeCart(removeType, removeElement));
  };
  return (
    <>
      <div className="flex flex-col md:flex-row p-2 md:p-6 gap-10 bg-slate-100">
        <div
          className={`flex flex-col flex-wrap gap-4 w-full ${
            getcart.length > 0 ? "md:w-3/4" : "md:w-full"
          }  bg-white`}
        >
          {getcart.length > 0 ? (
            getcart.map((item: any, index: number) => {
              actualTotalPrice += item.quantity * item?.original_price;
              totalPrice += item.quantity * item.price;
              return (
                <>
                  <div
                    key={item.id}
                    className="flex flex-row md:py-4 md:px-6 gap-5"
                  >
                    <div className="flex flex-col w-32 md:w-72 items-center">
                      <div
                        className="md:object-contain mt-3 mb-6"
                        onClick={() => handleChange(item)}
                      >
                        <img
                          src={item.img}
                          alt="itm img"
                          className="w-24 h-24 md:w-auto md:h-36"
                        />
                      </div>
                      <div className="flex felx-row text-center gap-4 text-lg font-semibold">
                        <div
                          className={`px-2 ${
                            item.quantity > 1 ? "" : "text-gray-300"
                          } rounded-full border-2 cursor-pointer`}
                          onClick={() => {
                            cartHandler(item, "remove");
                            item.quantity > 1 &&
                              setShowToast({
                                val: true,
                                msg: `You have changed '${
                                  item.product_name
                                }' QUANTITY to '${item.quantity - 1}'`,
                              });
                          }}
                        >
                          -
                        </div>
                        <div className="px-4 border-2 ">{item.quantity}</div>
                        <div
                          className="px-2 rounded-full border-2 cursor-pointer"
                          onClick={() => {
                            cartHandler(item, "add");
                            setShowToast({
                              val: true,
                              msg: `You have changed '${
                                item.product_name
                              }' QUANTITY to '${item.quantity + 1}'`,
                            });
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div
                        className="line-clamp-1 cursor-pointer font-semibold text-lg hover:text-blue-500"
                        onClick={() => handleChange(item)}
                      >
                        {item.product_name}
                      </div>
                      <div>
                        Delivery in 2 days |
                        <span className="text-green-600"> Free</span>
                      </div>
                      <div className="flex md:mt-8 items-center gap-3">
                        <div className="text-gray-400 font-medium ">
                          <del>₹{item.quantity * item?.original_price}</del>
                        </div>
                        <div className="text-xl font-medium">
                          ₹{item.quantity * item?.price}
                        </div>
                        <div className="text-green-600 font-medium">
                          {item.offer_percentage} % off
                        </div>
                      </div>
                      <div className="text-green-600 font-medium">
                        {item.offers.length} offers applied <i>icon</i>
                      </div>

                      <div className="mt-3 md:mt-8 flex gap-6 md:text-lg font-semibold">
                        <div
                          className="cursor-pointer"
                          onClick={() => saveLaterHandler(item)}
                        >
                          SAVE FOR LATER
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            setRemoveElement(item.id);
                            setRemoveType("cart");
                            setIsRemove(true);
                          }}
                        >
                          REMOVE
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="flex flex-col p-6 justify-center gap-3 items-center ">
                <div className="object-cover m-1">
                  <img src={no_cart} alt="nocart img" className="w-80 h-60" />
                </div>
                <div className="text-2xl">Your cart is empty!</div>
                <div className="text-center">
                  Explore our wide selection and find somthing you like
                </div>
              </div>
            </>
          )}
          {getcart.length > 0 && (
            <div className="sticky  bottom-0 flex bg-slate-300 justify-end">
              <div className="py-3 m-4 w-full md:w-60 bg-orange-500 text-center text-white text-lg font-medium">
                PLACE ORDER
              </div>
            </div>
          )}
          {saveLater.length > 0 && (
            <div className="flex mb-4 flex-col flex-wrap gap-4 w-full bg-white">
              <div className="p-3 font-semibold w-full text-lg border-y-2">
                Saved For Later ({saveLater.length})
              </div>
              {saveLater.map((item: any, index: number) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-row md:py-4 md:px-6 gap-5"
                  >
                    <div className="flex flex-col w-32 md:w-72 items-center">
                      <div
                        className="md:object-contain mt-3 mb-6"
                        onClick={() => handleChange(item)}
                      >
                        <img
                          src={item.img}
                          alt="itm img"
                          className="w-24 h-24 md:w-auto md:h-36"
                        />
                      </div>
                      <div className="flex felx-row text-center gap-4 text-lg font-semibold">
                        <div className="px-2 rounded-full text-gray-300 border-2 cursor-pointer">
                          -
                        </div>
                        <div className="px-4 border-2 ">{item.quantity}</div>
                        <div className="px-2 rounded-full border-2 text-gray-300 cursor-pointer">
                          +
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div
                        className="line-clamp-1 cursor-pointer font-semibold text-lg hover:text-blue-500"
                        onClick={() => handleChange(item)}
                      >
                        {item.product_name}
                      </div>
                      <div>
                        Delivery in 2 days |
                        <span className="text-green-600"> Free</span>
                      </div>
                      <div className="flex md:mt-8 items-center gap-3">
                        <div className="text-gray-400 font-medium ">
                          <del>₹{item.quantity * item?.original_price}</del>
                        </div>
                        <div className="text-xl font-medium">
                          ₹{item.quantity * item?.price}
                        </div>
                        <div className="text-green-600 font-medium">
                          {item.offer_percentage} % off
                        </div>
                      </div>
                      <div className="text-green-600 font-medium">
                        {item.offers.length} offers applied <i>icon</i>
                      </div>

                      <div className="mt-3 md:mt-8 flex gap-6 md:text-lg font-semibold">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            movetToCartHandler(item.id);
                            setShowToast({
                              val: true,
                              msg: `'${item.product_name}' has been moved to your Cart'`,
                            });
                          }}
                        >
                          MOVE TO CART
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            setRemoveElement(item.id);
                            setRemoveType("save");
                            setIsRemove(true);
                          }}
                        >
                          REMOVE
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <SnackBar showToast={showToast} setShowToast={setShowToast} />
        </div>
        {getcart.length > 0 && (
          <div className="sticky top-20 p-6 bg-white h-80 md:w-1/5">
            <div className="text-gray-400">PRICE DETAILS</div>
            <div className="flex flex-col mt-5 border-b-2">
              <div className="flex justify-between mb-4">
                <div>Price ( {getcart.length} items) </div>{" "}
                <div className="">₹{actualTotalPrice}</div>
              </div>
              <div className="flex justify-between mb-4">
                <div>Discount </div>
                <div className="text-green-500">
                  - ₹{actualTotalPrice - totalPrice}
                </div>
              </div>
              <div className="flex  justify-between mb-4">
                <div>Delivery Charges </div>{" "}
                <div className="text-green-500">Free</div>
              </div>
            </div>
            <div className="flex mt-5 border-b-2 pb-4 justify-between text-lg font-medium">
              <div>Total Amount </div> <div className="">₹{totalPrice}</div>
            </div>

            <div className="text-green-600 mt-3">
              you will save ₹{actualTotalPrice - totalPrice} on this order
            </div>
          </div>
        )}
        {isRemove && (
          <>
            <div
              className="fixed z-50 flex items-center inset-0 justify-center "
              onClick={() => setIsRemove(false)}
            >
              <div
                className="flex flex-col p-5 justify-between h-40 w-80 rounded-md bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="font-semibold ">Remove Item</div>
                <div className="text-xs font-medium text-gray-400 mb-4">
                  Are you sure you want to remove this item?
                </div>
                <div className="flex gap-4">
                  <div
                    className="text-center py-2 font-medium w-1/2 border-2 border-gray-400 hover:text-blue-400  cursor-pointer"
                    onClick={() => setIsRemove(false)}
                  >
                    Cancel
                  </div>
                  <div
                    className="text-center font-medium py-2 w-1/2 bg-blue-400 text-white cursor-pointer"
                    onClick={() => {
                      setIsRemove(false);
                      removeHandler();
                    }}
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
