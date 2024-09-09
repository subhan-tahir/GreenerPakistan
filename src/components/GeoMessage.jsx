import React from "react";

const GeoMessage = () => {
  return (


    <>
    <style>
     {`
      @media screen and (max-width:1285px){
      
      .group{
      display:none;
      }
      }
      `
     }
    </style>


      <div className="w-full">
        <div className="flex gap-[40px] justify-center py-[10%] px-[8%]">
          <div className="flex flex-col gap-[20px] w-[40%]">
            <div>
              <h1  className="text-[--darkGreyColor] text-[37px] font-[700]">CEO's Message</h1>
            </div>
            <div>
              <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[14px]">
                As the CEO of Greener, it fills me with immense pride to play a
                part in fostering a sustainable environment and offering
                eco-friendly solutions to our community.
              </p>
            </div>
            <div>
              <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[14px]">
                Our mission extends far beyond mere sales – we're committed to
                raising awareness about the importance of innovation and
                reducing carbon footprints. Our customers aren't just clients;
                they're valued members of our extended family, and their
                satisfaction is our top priority.
              </p>
            </div>
            <div>
              <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[14px]">
                Together, we have the power to make a real difference. Let's
                embrace sustainability and go Greener, together.
              </p>
            </div>
          </div>
          <div className="w-[30%]">
            <img src="src/assets/uncleJee.webp" alt="" className="w-full"/>
          </div>
          <div className="flex-col gap-[50px] justify-center w-[30%]  group">
            <div>
              <h1 className="text-[--secondaryColor] text-[34px] font-[700]">140+ <span className="text-[--primaryColor]">Clients</span></h1>
            </div>
            <div><h1 className="text-[--secondaryColor] text-[34px] font-[700]">700+ <span className="text-[--primaryColor]">Successive Prize</span></h1></div>
            <div><h1 className="text-[--secondaryColor] text-[34px] font-[700]">800+ <span className="text-[--primaryColor]"> Conservation of Energy</span></h1></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeoMessage;
