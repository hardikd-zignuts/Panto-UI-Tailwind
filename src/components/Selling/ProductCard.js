import React from 'react'
import star from '../../assets/image/icon/star.svg'
import add from '../../assets/image/icon/add.svg'
const ProductCard = ({ price, category, name, image }) => {
    return (
        <div className='bg-white relative h-[441.73px] mt-[130px] rounded-[20px] mx-[24px] max-md:w-[95%] max-md:ml-[9px]'>
            <div className='relative bg-product-bg h-[239.15px] mb-[13.71px] rounded-[20px]'>
                <img src={image} alt="product" className='absolute top-[-67px] left-[22px] max-[999px]:left-[94px] max-lg:left-[49px] max-md:left-[160px] max-sm:left-[61px] max-[493px]:left-[133px] max-[413px]:left-[42px] transition-all duration-500 cursor-pointer hover:scale-110' />
            </div>

            <div className="font-Inter font-medium text-[16.7554px] leading-[20px] text-cat-color mt-[13.71px] mb-[6.09px] ms-[21.33px]">{category}</div>

            <div className="font-Inter font-semibold text-[21.3215px] leading-[26px] capitalize text-product-title mb-[8px] mx-[21.33px]">{name}</div>

            <div className="ml-[22.85px] mb-[37.65px]">
                <img src={star} alt="rating" />
            </div>

            <div className="flex font-light text-[21.3251px] leading-[26px] text-product-title ml-[21.33px]"><span className="font-Inter font-medium text-[15.2322px] leading-[18px] text-product-title mx-[3px]">$</span>{price}</div>
            <button className="bg-product-title flex items-start gap-[15.23px] w-[48.74px] h-[48.74px] absolute p-[12.1858px] rounded-[31px] right-[21.32px] bottom-[27.42px]">
                <img src={add} alt="add" />
            </button>
        </div>
    )
}
export default ProductCard
