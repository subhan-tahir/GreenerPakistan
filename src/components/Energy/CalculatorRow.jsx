import React, { useEffect, useState } from 'react'

const CalculatorRow = ({title}) => { 
    let[inputValue,setInputValue]=useState(0);
    let[countValue,setCountValue]=useState(0);
    let[showLoad,setShowLoad]=useState(0);
    let[totalLoad,setTotalLoad]=useState(0);
    let handleChange = (e)=>{
        e.target.value;
        setInputValue(e.target.value);
        
    }
    let handleCountChange = (e)=>{
        e.target.value;
        setCountValue(e.target.value);  
    }
    useEffect(() => {
        let calculateLoad = inputValue * countValue;
        setShowLoad(calculateLoad);
        let totalShowLoad =+  calculateLoad;
        // totalLoad = totalShowLoad;
        setTotalLoad(totalShowLoad)
        
    }, [inputValue, countValue]);

    return (
        <>
            <div className='flex justify-between pt-[5px] px-[30px] rounded-[30px] bg-[--lightBackgroundColor]'>
                <div className='flex items-center w-[200px] text-black text-[16px] h-[50px] font-[400]'>
                    {title}
                </div>
                <div className='flex items-center w-[200px] text-black text-[16px] h-[50px] font-[400]'>
                    <div className='flex items-center'>
                        <div className='w-[100px]'>
                            <select name="" id=""  className='w-[100px] h-[30px]'>
                                <option value={inputValue}>{inputValue}</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                        <div >
                            {/*units */}
                            <input onChange={handleChange} className='w-[100px]  h-[30px] ml-4' type="number" name="" id=""  min="0" value={inputValue}/></div>
                    </div>
                </div>
                <div className='flex items-center w-[200px] text-black text-[16px] h-[50px] font-[400]' >
                    {/*count */}
                    <input onChange={handleCountChange} className='w-[100px] h-[30px]' type="number"  min={0} value={countValue}/>
                </div>
                <div className='flex items-center w-[200px] text-black text-[16px] h-[50px] font-[400]'>{showLoad + ' W'}</div>
            </div>
            

        </>
    )
}

export default CalculatorRow
