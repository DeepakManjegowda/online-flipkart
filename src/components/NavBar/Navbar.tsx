import { useState } from "react";
import logoImg from "../../assets/images/flipkartLogo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import PopOver from "../PopOver";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const category = [
    {
      name: "Performance",
      url: "profile",
    },
    {
      name: "bbbb",
      url: "profile",
    },
  ];
  const counter = useSelector((state: any) => state.counter);
  return (
    <>
      <div className="py-3 bg-blue-500 text-white">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col">
            <img src={logoImg} className="h-5" />
            <div className="text-sm">Explore plus</div>
          </div>
          <div className="p-2 bg-white md:flex text-black">
            <input
              className="w-4 md:w-96  outline-none"
              placeholder="search products"
              type="text"
            />
            <div className=" text-black">
              <CiSearch size={25} />
            </div>
          </div>
          <div className="flex gap-2 md:gap-10 items-center">
            <div className="md:w-28 text-center py-2 md:text-blue-500 md:bg-white">
              login
            </div>
            <div className="ml-2 ">
              <PopOver category={category} text="More" />
            </div>
            <div className="flex items-center ">
              <div className="m-1">
                <FaShoppingCart />
              </div>
              <div>Cart {counter}</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
