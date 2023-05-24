import React from 'react'
import { ChoiceData } from '../../constant/CardData'
import RightArrow from './../../assets/image/icon/right-arrow.svg'

const ChoosingUs = () => {
    return (
        <div className='my-[120px] max-xl:my-[70px]'>
            <div className="container mx-auto">
                <div className='flex justify-center items-center max-xl:flex-col px-[20px]'>
                    <div className="xl:w-1/4 w-full">
                        <div className='main-title text-center xl:text-start leading-[49px] w-[242px] max-xl:w-full max-xl:my-[15px] max-md:text-[29px] max-md:leading-[38px]'>Why Choosing Us</div>
                    </div>
                    <div className="xl:w-3/4 w-full">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            {
                                ChoiceData.map(ele => {
                                    return (
                                        <div key={ele.id} className="text-center xl:text-start">
                                            <div className="text-title-text font-Gilroy-Bold text-[24px] leading-[28px] opacity-90 my-[10px] max-md:text-[20px] max-md:leading-[19px]">{ele.title}</div>
                                            <div className="font-Gilroy-Regular text-[16px] leading-[185%] text-title-text my-[10px] opacity-80 max-md:text-[12px] max-md:leading-[130%]">{ele.description}</div>
                                            <div className='font-Gilroy-Medium text-[14px] leading-[185%] text-bag-bg flex items-center w-[121px] my-[4px] max-lg:mx-auto max-md:w-[80px] max-md:text-[9px] max-xl:mx-auto'>More Info <img className='max-md:h-[9px]' src={RightArrow} alt="RightArrow" /></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs
