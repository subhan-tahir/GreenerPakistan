import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { contactButtons, navbarItems } from "./script";
import logo from "/src/assets/logo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/*Desktop navbar*/}
      <div className="w-full absolute sm:top-0 top-6">
        {/*top header */}
        <div className="sm:flex hidden justify-between px-8 m-2 py-2">
          {/*left section */}
          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[--primaryColor]"/>
              <a href="#">
                <div>info@greener.com.pk</div>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[--primaryColor]"/>
              <a href="#">
                <div>0333-1111526</div>
              </a>
            </div>
          </div>
          {/*right section*/}
          <div className="flex gap-2">
            {contactButtons.map((value, index) => {
              const Icon = value.icon;
              return (
                <button
                  key={index}
                  className="p-[4px] bg-white rounded-[6px] text-[20px] text-[--primaryColor]"
                >
                  <a href="#">
                    <Icon />
                  </a>
                </button>
              );
            })}
          </div>
        </div>
        {/*bottom header */}
        <div className="flex  justify-between bg-[white] px-4 mx-6 py-4 rounded-[25px]">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-[130px] object-cover" />
          </div>
          <div>
            <ul className="lg:flex hidden gap-5 justify-center items-center">
{
  navbarItems.map((value,index)=>{
    return(
    <Link to={value.path} key={index} > <li className="text-[15px] cursor-pointer text-[--blackColor] 
  visited:text-[--primaryColor]" tabIndex={index}>{value.item}</li></Link>
    )
  })
}

<Link to='/contact'> <li><button className="bg-[--primaryColor] text-[black] px-8 py-2 rounded-full">Contact Us</button>
</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
