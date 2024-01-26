import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ status1, status2, text, delay }) => {
    const [currentText , setcurrentText] = useState('');
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(()=>{
        if (text && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setcurrentText(prevText => prevText + text[currentIndex]);
                setcurrentIndex(prevIndex => prevIndex + 1);
              }, delay);
          
              return () => clearTimeout(timeout);
        }

    },[currentIndex, text, delay])

  if ((status1 === undefined, status2 === undefined)) {
    return (
      <div>
        <div className="grid lg:place-items-center">
          <div className="flex  my-4 ">
            <NavLink to="/list/meateater">
              <h1
                className={
                  status1 === true
                    ? "border p-2  w-24 border-r-0 rounded-l-lg bg-black cursor-pointer text-white"
                    : "border p-2  w-24 border-r-1 rounded-l-lg cursor-pointer"
                }
              >
                MeatEater
              </h1>
            </NavLink>
            <NavLink to="/list/vegan">
              <h1
                className={
                  status2 === true
                    ? "border py-2 ps-6 w-24 border-l-0 rounded-r-lg bg-black cursor-pointer text-white"
                    : "border py-2 ps-6 w-24 border-l-0 rounded-r-lg cursor-pointer"
                }
              >
                Vegan
              </h1>
            </NavLink>
          </div>
        </div>
        <div className={currentText ? 'grid place-items-center lg:h-[565px]' : 'grid place-items-center lg:h-[565px] hidden'}>
          <h3 className="drop-shadow-sm ">{currentText}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="grid lg:place-items-center ">
      <div className="flex  my-4">
        <NavLink to="/list/meateater">
          <h1
            className={
              status1 === true
                ? "border p-2  w-24 border-r-0 rounded-l-lg bg-black cursor-pointer text-white"
                : "border p-2  w-24 border-r-0 rounded-l-lg cursor-pointer"
            }
          >
            MeatEater
          </h1>
        </NavLink>
        <NavLink to="/list/vegan">
          <h1
            className={
              status2 === true
                ? "border py-2 ps-6 w-24 border-l-0 rounded-r-lg bg-black cursor-pointer text-white"
                : "border py-2 ps-6 w-24 border-l-0 rounded-r-lg cursor-pointer"
            }
          >
            Vegan
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
