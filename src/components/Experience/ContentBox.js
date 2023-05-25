import React from 'react'
import arrow from '../../assets/image/icon/right-arrow.svg'

const ContentBox = ({ header, title, content }) => {
    return (
        <>
            <div id={header} className="mt-[17px] text-start max-[1390px]:text-center min-[1201px]:text-center max-xl:text-center max-xl:mt-[40px]">
                <div className="font-Gilroy-Bold text-[18px] leading-[21px] tracking-[0.175em]  text-bag-bg max-[1390px]:w-full max-[1390px]:mx-auto max-md:text-[14px] max-sm:text-[11px] max-sm:leading-0 uppercase">
                    {header}
                </div>
                <div className="w-[413px] text-[42px] leading-[49px] capitalize text-title-text font-Gilroy-Bold my-[20px] max-[1390px]:w-[70%] max-[1390px]:my-[20px] max-[1390px]:mx-auto min-xl:w-[70%] min-xl:my-[20px] min-xl:mx-auto max-xl:my-[20px] max-xl:w-[70%] max-xl:mx-auto max-md:text-[29px] max-md:leading-[39px] max-sm:text-xl max-sm:leading-7 max-sm:w-full max-sm:mx-auto max-sm:my-[13px]">
                    {title}
                </div>
                <div className="text-lg leading-[185%] text-title-text opacity-80 w-[556px] mb-6 font-Gilroy-Regular max-[1390px]:w-[78%] max-[1390px]:mt-0 max-[1390px]:mb-6 max-[1390px]:mx-auto min-xl:w-[78%] min-xl:mt-0 min-xl:mb-6 min-xl:mx-auto max-md:text-[11px] max-md:leading-[163%] max-md:mt-0 max-md:mb-[11px] max-md:mx-auto">
                    {content}
                </div>
                <div className='text-sm leading-[185%] text-bag-bg w-[110px] justify-between flex items-center font-Gilroy-Medium max-[1390px]:w-[114px] max-[1390px]:mx-auto min-xl:w-[114px] min-xl:mx-auto max-xl:mx-auto max-xl:w-[125px] max-md:text-[9px] max-md:leading-[150%] max-md:w-[92px] max-sm:text-[8px] max-sm:leading-[0] max-sm:w-[85px]'>
                    More Info
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </>
    )
}

export default ContentBox