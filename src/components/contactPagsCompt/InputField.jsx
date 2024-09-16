import React from "react";

const InputField = ({type,placeholder}) => {
  return (
    <>
     
        <div className="w-full m-2">
          <input
            type={type}
            name=""
            id=""
            className="w-full rounded-[10px] bg-[--lightBackgroundColor] p-[15px] border-0 outline-0 
                        text-[16px] text-[--secondaryColor] m-2"
            placeholder={placeholder} required          
          />
        </div>
       
      
    </>
  );
};

export default InputField;
