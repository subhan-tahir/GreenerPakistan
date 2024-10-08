import React from "react";

const Hero = () => {
  return (
    <>
   <div className="relative " ></div>
      <div
        style={{ backgroundImage: `url(${"src/assets/solar.png"})` }}
        className="bg-cover w-full h-screen z-[-4] bg-center" 
      >
        <div className="absolute left-[8%]  lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
          <div>
           <h1 className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10" style={{textShadow:'5px 5px 15px black'}}> Paving the way to a <span class="green"> Greener </span>Solution</h1>
          </div>

          <div>
            <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
              Our commitment to renewable energy paves the way for a greener
              tomorrow, offering eco-conscious solutions for today's energy
              needs.
            </p>
          </div>
          <div>
          <button className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4">Our Services</button>
          <button className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">Contact Now</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
