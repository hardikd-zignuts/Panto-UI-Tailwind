import React from 'react'
import search from '../../assets/image/icon/search.svg'

const Hero = () => {
    return (
        <>
            <div className="flex flex-col text-center content-center items-center mt-[86px] mb-[14px] max-xl:mt-[65px] max-lg:mt-[35px] max-sm:mt-[12px] max-[674px]:mt-[11px]">
                <div className="font-Gilroy-Bold text-[80px] leading-[130%] tracking-[-0.01em] capitalize w-[861px] max-xl:w-[661px] max-lg:w-[527px] max-sm:w-[360px] max-xs:w-[306px] max-xl:text-[45px] max-lg:text-[35px] max-sm:text-[29px] max-xs:text-[23px]">
                    Make your interior more minimalistic & modern
                </div>

                <div className="font-Gilroy-Regular text-[24px] leading-[38px] opacity-[0.8] w-[606px] max-xl:text-[15px] max-xl:w-[406px] max-xl:leading-[30px] max-lg:text-[13px] max-lg:w-[299px] max-lg:leading-[24px] max-sm:text-[11px] max-sm:leading-[15px] max-sm:w-[259px] max-xs:w-[211px]">
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </div>
                <div className='hero-box_input relative w-[344px] gap-2.5 backdrop-blur-sm leading-[150%] text-start text-white opacity-80 flex-none order-none grow-0 mt-[45px] rounded-[42px] border-[0.861538px] border-solid border-[rgba(255,255,255,0.6)] background: rgba(255, 255, 255, 0.15) max-xl:mt-[16px] max-lg:w-[269px] max-sm:w-[218px] max-xs:w-[171px]'>

                    <input className='text-white ml-5 mr-0 my-[7.5px] border-none bg-transparent focus:outline-none focus:ring-none focus:ring-transparent placeholder:text-white max-lg:placeholder:text-[13px] max-sm:placeholder:text-[12px] max-xs:placeholder:text-[10px] max-xl:my-[5.5px] max-xl:mr-0 max-xl:ml-[20px] max-lg:my-[1.5px] max-lg:text-[13px] max-sm:my-[-1.5px] max-xs:my-[1.5px] max-xs:py-[4px] max-xs:text-[10px]' type="text" placeholder="Search furniture" />

                    <img className='absolute top-[4px] h-[46px] right-[3px] max-xl:top-[8px] max-xl:h-[34px] max-lg:h-[28px] max-sm:h-[25px] max-sm:top-[5px] max-xs:h-[21px]' src={search} alt="search" />
                </div>
            </div>
        </>
    )
}

export default Hero