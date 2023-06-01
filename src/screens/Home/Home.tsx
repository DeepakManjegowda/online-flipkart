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
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import no_item_found from "../../assets/images/no-item-found.jpeg";
const Home = () => {
  const [data, setData] = useState<any>(products);
  const [activeCategory, setActiveCategory] = useState();
  const count: any = useOutletContext();
  const category = [
    {
      img: top_offers,
      name: "All",
    },
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
      name: "Electronic",
    },
    {
      img: home,
      name: "Home",
    },
    {
      img: appliances,
      name: "Appliance",
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
  ];

  const navigate = useNavigate();

  const handleChange = (item: any) => {
    navigate(`/product/${item.id}/${item.category}`);
  };

  const handlingCategory = (category: any) => {
    setActiveCategory(category);
    if (category === "all") {
      setData(products);
    } else {
      let aaa = products.filter((element) => element.category === category);
      setData(aaa);
    }
  };
  const filterdData = data.filter((row: any) => {
    return row.product_name
      .toString()
      .toLowerCase()
      .includes(count.toLowerCase());
  });

  return (
    <>
      <div className="py-3 md:px-10 flex justify-between  overflow-x-auto border-b-2 border-slate-200">
        {category?.map((item: any, index: number) => {
          return (
            <div className="flex flex-col items-center gap-2 mx-2 " key={index}>
              <div className="h-12 w-14 ">
                <img
                  onClick={() => handlingCategory(item.name.toLowerCase())}
                  src={item.img}
                  alt="alt"
                  className="bg-white rounded-full"
                />
              </div>
              <div
                className={`${
                  activeCategory == item.name.toLowerCase()
                    ? "text-blue-400"
                    : ""
                }`}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex m-1">
        {filterdData.length > 0 ? (
          <div className="flex flex-wrap ">
            {filterdData.map((item: any, index: number) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center cursor-pointer w-44 md:w-60 text-center bg-white"
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
                    <div className="">{item.rating}</div>
                    <div className="ml-1">
                      <FaStar />
                    </div>
                  </div>
                  <div className="text-lg font-medium">₹ {item.price}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full flex mt-3 h-auto justify-center items-center">
            <div className="flex flex-col gap-3 items-center ">
              <div className="mt-2">
                <img
                  src={no_item_found}
                  alt="no_itm img"
                  className="w-80 h-60"
                />
              </div>
              <div className="text-xl font-medium">
                Sorry, items not found here!
              </div>
              <div className="text-center">
                Please Check with other category or try searching for somthing
                else
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
