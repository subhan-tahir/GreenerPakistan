import React from 'react'
import { serviceCardsData } from './script'


const ServiceCards = () => {
    return (
        <>

            <div className='flex flex-col gap-[40px] p-[8%]'>
                <div className='text-[20px] font-[700] text-[--darkGreyColor] text-center'>
                    <p>At Greener Pakistan, we offer a comprehensive range of solar energy services tailored to meet your specific needs:</p>
                </div>
                <div className='flex flex-wrap gap-[40px] justify-center items-center'>
                    {
                        serviceCardsData.map((value,index)=>

                    <div key={index} className='flex flex-col gap-[20px]   w-[400px]  rounded-[15px] bg-[--lightBackgroundColor] p-[20px] group cursor-pointer '>
                        <div className='overflow-hidden rounded-[12px] '>
                            <img src={value.pic} alt="" className='w-full object-cover  h-[210px]  group-hover:scale-[1.3] transition-all ease-in-out duration-700' />
                        </div>
                        <div>
                            <h1 className='text-[20px] font-bold text-center text-[--darkGreyColor]'>{value.title}</h1>
                        </div>
                        <div>
                            <p className='text-[--darkGreyColor] leading-[32px] text-[16px]'>{value.des}</p>
                        </div>
                    </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ServiceCards
