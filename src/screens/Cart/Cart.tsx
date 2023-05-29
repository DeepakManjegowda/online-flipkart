import { useSelector } from "react-redux";
import ProductsProps from "../../config/products";
import { products } from "../../config/data";
import { useEffect } from "react";

const Cart = () => {
  const getcart: any = useSelector((state: any) => state.getCart);

  const addCartHandler = (item: ProductsProps) => {
    const product: any = products.find((obj) => obj.id === Number(item.id));
    console.log("item", item);
    console.log("product", product);
    item.quantity += 1;
    item.price += product.price;
    item.original_price += product.original_price;
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-6 gap-10 bg-slate-50">
        <div className="flex flex-col flex-wrap gap-4 w-full md:w-3/4 bg-white">
          {getcart.map((item: any, index: number) => {
            return (
              <div
                key={item.id}
                className="flex flex-row md:py-4 md:px-6 gap-5"
              >
                <div className="flex flex-col w-32 md:w-72 items-center">
                  <div className="md:object-contain mb-6">
                    <img src={item.img} className="w-24 md:w-auto md:h-36" />
                  </div>
                  <div className="flex felx-row text-center gap-4 text-lg font-semibold">
                    <div className="px-2 rounded-full border-2">-</div>
                    <div className="px-4 border-2 ">1</div>
                    <div
                      className="px-2 rounded-full border-2"
                      onClick={() => addCartHandler(item)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="line-clamp-1 font-semibold text-lg">
                    {item.product_name}
                  </div>
                  <div>
                    Delivery in 2 days |
                    <span className="text-green-600"> Free</span>
                  </div>
                  <div className="flex md:mt-8 items-center gap-3">
                    <div className="text-gray-400 font-medium ">
                      <del>₹{item?.original_price}</del>
                    </div>
                    <div className="text-xl font-medium">₹{item?.price}</div>
                    <div className="text-green-600 font-medium">
                      {item.offer_percentage} % off
                    </div>
                  </div>
                  <div className="text-green-600 font-medium">
                    {item.offers.length} offers applied <i>icon</i>
                  </div>

                  <div className="mt-3 md:mt-8 flex gap-6 md:text-lg font-semibold">
                    <div className="cursor-pointer">SAVE FOR LATER</div>{" "}
                    <div className="cursor-pointer"> REMOVE</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="sticky bottom-0 flex bg-slate-300 justify-end">
            <div className="py-3 m-4 w-full md:w-60 bg-orange-500 text-center text-white text-lg font-medium">
              PLACE ORDER
            </div>
          </div>
        </div>
        <div className=" p-6 bg-white  h-80 md:w-1/5">
          <div className="text-gray-300">PRICE DETAILS</div>
          <div className="flex flex-col mt-5 border-b-2">
            <div className="flex justify-between mb-4">
              <div>Price (items) </div> <div className="">₹4678</div>
            </div>
            <div className="flex  justify-between mb-4">
              <div>Discount </div> <div className="">₹4678</div>
            </div>
            <div className="flex  justify-between mb-4">
              <div>Delivery Charges </div> <div className="">₹4678</div>
            </div>
          </div>
          <div className="flex mt-5 border-b-2 pb-4 justify-between">
            <div>Total Amount </div> <div className="">₹1848</div>
          </div>

          <div className="text-green-600 mt-3">
            you will save ₹3000 on this order
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
