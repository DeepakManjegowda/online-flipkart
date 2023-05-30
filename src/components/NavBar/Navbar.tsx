import { useState } from "react";
import logoImg from "../../assets/images/flipkartLogo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import PopOver from "../PopOver";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
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
  const getcart: any = useSelector((state: any) => state.getCart);

  return (
    <>
      <div className="py-3 bg-blue-500 text-white sticky top-0 z-50">
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
            <div
              className="flex items-center cursor-pointer "
              onClick={() => navigate("/cart")}
            >
              <div className="m-1 relative">
                <FaShoppingCart />
                <div className="absolute text-center bg-redorange text-white h-5 w-4 rounded-md left-2 -top-4">{getcart.length}</div>
              </div>
              
              <div className="ml-2">Cart </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
