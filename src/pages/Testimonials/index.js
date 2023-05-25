import React from 'react'
import Slider from 'react-slick'
import { ReviewData } from '../../constant/CardData'
import { ReviewSetting } from '../../constant/setting'
import ClientCard from '../../components/Testimonials/ClientCard'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div className="text-lg leading-[21px] text-center tracking-[0.175em] uppercase text-bag-bg font-Gilroy-Bold my-[10px] max-lg:text-[15px] max-lg:leading-[13px] max-sm:text-[12px] max-sm:leading-[4px]">
                    Testimonials
                </div>
                <div className="text-[42px] leading-[49px] text-center capitalize text-title-text mt-2.5 mb-[60px] font-Gilroy-Bold max-lg:text-[34px] max-lg:leading-[35px] max-sm:text-[29px] max-sm:leading-[35px] max-sm:mb-[33px]">
                    Our Client Reviews
                </div>
                <div className="container mx-auto">
                    <div className="review-gallery">
                        <Slider {...ReviewSetting}>
                            {
                                ReviewData.map(ele => {
                                    return (
                                        <ClientCard key={ele.id} {...ele} />
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials