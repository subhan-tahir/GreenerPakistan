import React from 'react'
import CalculatorRow from './CalculatorRow'

const EnergyCalculator = () => {

    return (
        <>
            <div className='flex flex-col gap-[40px] p-[8%]'>
                <div className='text-[20px] font-[700] text-[--darkGreyColor] text-center'>
                    <p>At Greener Pakistan, we offer a comprehensive range of solar energy services tailored to meet your specific needs:</p>
                </div>
                <div className='flex justify-between pt-[10px] px-[30px] rounded-[30px] bg-[--secondaryColor]'>
                    {/*row1 here */}
                    <div className='flex items-center w-[200px] text-white text-[18px] h-[50px] font-[400]'>
                        Appliances
                    </div>
                    <div className='flex items-center w-[200px] text-white text-[18px] h-[50px] font-[400]'>
                        Units/W
                    </div>
                    <div className='flex items-center w-[200px] text-white text-[18px] h-[50px] font-[400]'>Count</div>
                    <div className='flex items-center w-[200px] text-white text-[18px] h-[50px] font-[400]'>Load</div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <CalculatorRow title="bulb"/>
                    <CalculatorRow title="Ceiling Fan"/>
                    <CalculatorRow title="Table Fan" />
                    <CalculatorRow title="TV" />
                    <CalculatorRow title="Air Conditioner" />
                    <CalculatorRow title="Washing Machine" />
                    <CalculatorRow title="Water Pump" />
                    <CalculatorRow title="Geyser" />
                    <CalculatorRow title="Heater" />
                    <CalculatorRow title="Refrigerator" />
                    <CalculatorRow title="Electric Iron" />
                    <CalculatorRow title="Mixer / Grinder" />
                    <CalculatorRow title="PC / Laptop" />
                    <CalculatorRow title="Microwave Oven" />
                    <CalculatorRow title="Radio" />
                    <CalculatorRow title="Stove" />
                    <CalculatorRow title="Cloth Drier" />
                    <CalculatorRow title="Electric Clock" />
                    <CalculatorRow title="Cooking Range" />
                    <CalculatorRow title="Other Appliances" />
                    <CalculatorRow title="Other Appliances" />
                    <CalculatorRow title="Other Appliances" />
                    <CalculatorRow title="Other Appliances" />
                    <CalculatorRow title="Other Appliances" />

                    <div className='flex  pt-[10px] px-[30px] rounded-[30px] bg-[--secondaryColor] text-white text-center justify-center items-center h-[50px] text-[20px] font-[400]'>Total Load = </div>
                </div>

            </div>
        </>
    )
}

export default EnergyCalculator
