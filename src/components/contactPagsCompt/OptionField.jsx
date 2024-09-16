import React from 'react'

const OptionField = ({labelText,optionsData}) => {
  return (
    <>
    <div className="w-full m-2">
        <label htmlFor="" className='p-4 text-[17px]'>{labelText}</label>
        <select name="How did you hear about us?" placeholder="How did you hear about us?" required
         className="w-full rounded-[10px] bg-[--lightBackgroundColor] p-[15px] border-0 outline-0 
                    text-[16px] text-[--secondaryColor] m-2"
                    
        >
            {
               optionsData.map((value,index)=>
                <option value={value} key={index}>{value}</option>
            ) 
            }
        
      
        </select>
    </div>
    </>
  )
}

export default OptionField