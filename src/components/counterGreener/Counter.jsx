import React, { useState, useEffect } from "react";
import counterData from "./script";

const Counter = () => {
  
  // Function to animate the counter
  const animateCounter = (finalValue, duration, setCount) => {
    let start = 0;
    const increment = finalValue / (duration / 16.67); // Approx. 60fps
    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(counterInterval);
      }
      setCount(Math.round(start));
    }, 16.67); // 60fps
  };

  return (
    <>
      <div className="bg-[--secondaryColor] w-full">
        <div className="flex flex-wrap justify-center items-center gap-[30px] px-[6%] py-[5%]">
          {counterData.map((value, index) => {
            const [count, setCount] = useState(0);
            useEffect(() => {
              animateCounter(value.finalValue, 2000, setCount); // 2000ms = 2 seconds
            }, [value.finalValue]);

            return (
              <div className="flex gap-[20px] w-[270px]" key={index}>
                <div className="p-[15px] rounded-[8px] bg-[--primaryColor] justify-center items-center">
                  {value.svg}
                </div>
                <div>
                  <h1 className="text-white text-[34px] font-[700]">
                   {`${+count}+`}
                  </h1>
                  <p className="text-[--primaryColor] font-[400] text-[16px]">
                    {value.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Counter;
