import React from 'react'

const Empower = () => {
    return (
        <>
            <div className="w-full">
                <div
                    className="w-[85%]  flex md:flex-row-reverse  flex-col justify-center items-center gap-[50px] "
                    style={{ margin: "10% auto" }}
                >
                    <div className="md:w-[48%] w-full h-[500px] relative">
                        <div className="absolute top-0 z-[3]">
                            <img
                                src="src\assets\wiredPic1.webp"
                                alt=""
                                className="w-[450px] h-[430px] rounded-[20px]"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 z-[4]">
                            <img
                                src="src\assets\wiredPic2.webp"
                                alt=""
                                className="w-[300px] h-[230px] bg-cover bg-center rounded-[20px] border-[8px] border-white"
                            />
                        </div>
                        <div className="absolute right-0 top-[20px] z-[1] bg-cover">
                            <img src="src/assets/about-right-shape.svg" alt="" className="" />
                        </div>
                    </div>
                    <div className="md:w-[52%] w-full flex flex-col gap-[20px]">

                        <div>
                            <h1 className="text-[--darkGreyColor] text-[37px] font-[700]">
                                Empower your space with our electrifying servicesa{" "}
                                <span className="text-[--primaryColor]"> - igniting efficiency and brilliance! </span>

                            </h1>
                        </div>
                        <div>
                            <p className="text-[--darkGreyColor] font-[400] leading-[29px] text-[16px]">
                                {" "}
                                Our services encompass:
                            </p>
                        </div>

                        <div className="flex flex-col gap-[10px] ">
                            <div className="flex gap-[10px] items-center">
                                <img
                                    src="src/assets/leaf.webp"
                                    alt=""
                                    className="w-[25px] h-[25px] object-contain"
                                />
                                <p className="text-[--blackColor] text-[16px] font-[500]">
                                    Streamlined documentation for new connections.
                                </p>
                            </div>
                            <div className="flex gap-[10px]">
                                <img
                                    src="src/assets/leaf.webp"
                                    alt=""
                                    className="w-[25px] h-[25px] object-contain"
                                />
                                <p className="text-[--blackColor] text-[16px]  font-[500]">Installation of LT / HT cables with precision.</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <img
                                    src="src/assets/leaf.webp"
                                    alt=""
                                    className="w-[25px] h-[25px] object-contain"
                                />
                                <p className="text-[--blackColor] text-[16px]  font-[500]">
                                    Thorough testing of LT / HT cables at consumer sites.
                                </p>
                            </div>
                            <div className="flex gap-[10px]">
                                <img
                                    src="src/assets/leaf.webp"
                                    alt=""
                                    className="w-[25px] h-[25px] object-contain"
                                />
                                <p className="text-[--blackColor] text-[16px]  font-[500]">

                                    Comprehensive maintenance of substations, encompassing all switch types.
                                </p>
                            </div>
                            <div className="flex gap-[10px]">
                                <img
                                    src="src/assets/leaf.webp"
                                    alt=""
                                    className="w-[25px] h-[25px] object-contain"
                                />
                                <p className="text-[--blackColor] text-[16px]  font-[500]">

                                Swapping out PTs and CTs for seamless operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Empower
