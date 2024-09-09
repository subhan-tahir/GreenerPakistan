import React from 'react'

const AboutHero = () => {
  return (
    <>
     <div
        style={{ backgroundImage: `url(${"src/assets/solar.png"})` }}
        className="bg-cover w-full h-[60vh] z-[-4] bg-center" 
      >
        <div className=" flex justify-center items-center h-full gap-[25px] w-[100%]">
          <div>
           <h1 className="text-[60px] font-[700] text-[--whiteColor] shadow" style={{textShadow:'5px 5px 15px black'}}> About Us</h1>
          </div>

        </div>
      </div>
    
    
    </>
  )
}

export default AboutHero