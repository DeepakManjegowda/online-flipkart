import grocery from "../../assets/images/grocery.jpeg";
import mobile from "../../assets/images/Mobiles.jpeg";
import fashion from "../../assets/images/Fashion.jpeg";
import electronics from "../../assets/images/Electronics.jpeg";
import home from "../../assets/images/Home.jpeg";
import appliances from "../../assets/images/Appliances.jpeg";
import toys from "../../assets/images/Toys.jpeg";
import vehicles from "../../assets/images/Vehicles.jpeg";
import travel from "../../assets/images/Travel.jpeg";
import top_offers from "../../assets/images/Top-offers.jpeg";
import { products } from "../../config/data";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const category = [
    {
      img: grocery,
      name: "Grocery",
    },
    {
      img: mobile,
      name: "Mobile",
    },
    {
      img: fashion,
      name: "Fashion",
    },
    {
      img: electronics,
      name: "Electronics",
    },
    {
      img: home,
      name: "Home",
    },
    {
      img: appliances,
      name: "Appliances",
    },

    {
      img: toys,
      name: "Toys",
    },
    {
      img: vehicles,
      name: "Vehicles",
    },
    {
      img: travel,
      name: "Travel",
    },
    {
      img: top_offers,
      name: "Top Offers",
    },
  ];

  const navigate = useNavigate();

  const handleChange = (item: any) => {
    navigate(`/product/${item.id}/${item.category}`);
  };

  return (
    <>
      <div className="py-3 md:px-10 flex justify-between overflow-x-auto border-b-2 border-slate-200">
        {category.map((item: any, index: number) => {
          return (
            <div className="flex flex-col items-center gap-2 mx-2 " key={index}>
              <div className="h-12 w-14 ">
                <img
                  src={item.img}
                  alt="alt"
                  className="bg-white rounded-full"
                />
              </div>
              <div className="">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mx-1 py-1 gap-2 h-72">
        <div className="flex flex-col items-center w-60  bg-blue-200">
          <div className="mt-12 text-2xl mb-4">Top Offers</div>
          <div className="bg-blue-600 w-24 text-center py-2">View All</div>
        </div>
        <div className="flex flex-row">
          {products.map((item: any, index: number) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center cursor-pointer  w-60 text-center bg-white"
                onClick={() => handleChange(item)}
              >
                <div className="w-3/5 h-1/2 mt-4 object-contain">
                  <img
                    src={item.img}
                    alt="item img"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-2 mb-1 line-clamp-2">
                  {item.product_name}
                </div>
                <div className="flex items-center bg-green-700 text-white px-1 rounded-sm">
                  <div className="">{item.rating}</div>{" "}
                  <div className="ml-1">
                    <FaStar />
                  </div>
                </div>
                <div className="text-lg font-medium">₹ {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
