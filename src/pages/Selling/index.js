import React, { useState } from 'react'
import ProductCard from '../../components/Selling/ProductCard'
import { Category, SellingProductData } from '../../constant/CardData'
import Slider from 'react-slick'
import { ProductSettings } from '../../constant/setting'
import Arrow from './../../assets/image/icon/right-arrow.svg'
import './selling.scss'

const SellingProduct = () => {
    const [isActive, setIsActive] = useState(0);
    return (
        <>
            <div className='bg-selling-bg'>
                <div className="flex justify-center flex-col items-center bg-selling-bg pt-[50px] pb-[32px]">
                    <div className="font-Gilroy-Bold text-[42px] leading-[49px] mb-[32px] max-md:text-[27px] max-md:leading-[35px]">
                        Best Selling Product
                    </div>
                    <div className="flex justify-around items-start p-[6px] bg-category-bg rounded-[44px] w-[348px] max-md:w-[265px] max-md:p-[5px]">
                        {
                            Category.map((cat, index) => {
                                return (
                                    <button onClick={() => setIsActive(index)} key={cat} className={`category-name border-0 ${isActive === index && 'active-cat'}`}>{cat}</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="product-gallery">
                        <Slider {...ProductSettings}>
                            {
                                SellingProductData.map(ele => {
                                    return (
                                        <ProductCard key={ele.id} {...ele} />
                                    )
                                })
                            }
                        </Slider>
                        <div className="font-Gilroy-Medium py-[50px] text-lg leading-[185%] text-bag-bg w-[121px] flex justify-between mx-auto">
                            View All <img src={Arrow} alt="view all" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingProduct