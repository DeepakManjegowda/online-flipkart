import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../config/data";
import { FaShoppingCart, FaStar, FaTag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCart, updateQuantity } from "../../redux/Actions";
import ProductsProps from "../../config/products";

const ProductDetails = () => {
  let { id, category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getcart: [] = useSelector((state: any) => state.getCart);

  const product: any = products.find((obj) => obj.id === Number(id))!;
  const categories = products.filter((obj) => obj.category === category);
  const offPrecentage =
    ((product.original_price - product.price) / product.original_price) * 100;

  const handleChange = (item: any) => {
    navigate(`/product/${item.id}/${item.category}`);
  };
  function cartHandler(prod: any): void {
    prod.offer_percentage = Math.floor(offPrecentage);
    if (prod.quantity === 0) {
      prod.quantity = 1;
      dispatch(addCart([...getcart, prod]));
      dispatch(updateQuantity(1));
      navigate("/cart");
    } else {
      navigate("/cart");
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-7 md:p-2 ">
        <div className="flex flex-col md:mx-10 md:mr-2 w-full md:w-4/6">
          <div className="flex flex-row px-2 items-center justify-center mb-10 w-full md:w-96 h-96">
            <img src={product?.img} alt="prod img" className="mt-6" />
          </div>
          <div className="mx-2 flex items-center justify-around mb-3 text-center text-white gap-2">
            <div
              className="flex gap-3 items-center cursor-pointer justify-center w-6/12 py-3  bg-yelloworange"
              onClick={() => {
                cartHandler(product);
              }}
            >
              {product.quantity > 0 ? (
                <>
                  <FaShoppingCart /> GO TO CART
                </>
              ) : (
                <>
                  <FaShoppingCart /> ADD TO CART
                </>
              )}
            </div>
            <div className="cursor-pointer flex gap-3 items-center justify-center w-6/12 py-3 bg-redorange ">
              BUY NOW
            </div>
          </div>
        </div>
        <div className="md:ml-5 p-6 w-full">
          <div className="flex flex-row-reverse w-full">share</div>
          <div className="text-lg font-medium mb-3">
            {product?.product_name}
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center bg-green-700 text-white px-1 rounded-sm">
              <div className="">{product?.rating}</div>{" "}
              <div className="ml-1">
                <FaStar />
              </div>
            </div>
            <div>{product?.reviews} reviews</div>
          </div>

          <div className="flex gap-2 items-center mb-4">
            <div className="text-2xl font-medium">₹{product?.price}</div>
            <div className="text-gray-400 font-medium ">
              <del>₹{product?.original_price}</del>
            </div>
            <div className="text-green-600 font-medium">
              {Math.floor(offPrecentage)}% off
            </div>
          </div>
          <div className="text-lg font-medium">Available Offers</div>
          {product?.offers.map((item: any, index: number) => {
            return (
              <div key={index} className="flex items-center gap-2 mb-3 text-sm">
                <FaTag className="text-green-500" />
                <div className="">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-10 mt-5">
        <div className="flex flex-col md:flex-row">
          {categories.map((item: any, index: number) => {
            return (
              <div
                key={item.id}
                className="flex cursor-pointer flex-col md:border-0 border-b-2 border-slate-300 items-center w-72 text-center bg-white"
                onClick={() => handleChange(item)}
              >
                <div className="w-3/5 h-1/2 mt-4 object-fill">
                  <img src={item.img} alt="item img" className="" />
                </div>
                <div className="mt-5 mb-1 mx-3 line-clamp-2">
                  {item.product_name}
                </div>
                <div className="flex items-center bg-green-700 text-white px-1 rounded-sm">
                  <div className="">{item.rating}</div>
                  <div className="ml-1">
                    <FaStar />
                  </div>
                </div>
                <div className="text-lg font-medium">₹{item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
