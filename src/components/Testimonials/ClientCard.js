import React from 'react'
import star from '../../assets/image/icon/4star.png'
const ClientCard = ({ image, title, name, review, bg }) => {
    return (
        <>
            <div style={{ background: `url('${bg}')` }} className="client-card relative h-[476px] bg-no-repeat w-[95%] m-auto left-[-6px] rounded-[18.1182px] max-xl:w-[80%] max-lg:w-[394px] max-md:w-[402px] max-sm:w-[374px] max-[440px]:w-[100%] max-[371px]:w-[336px] max-[364px]:w-[312px]">

                <div className="absolute bottom-[18px] bg-union w-[334px] h-[239px] text-center pt-[60px] left-[34px] max-sm:left-[24px] max-[440px]:left-[8%] max-[404px]:w-[300px] max-[404px]:left-[9%] max-[404px]:bg-center max-[404px]:bg-contain max-[404px]:h-[45%] max-[404px]:rounded-[18.1182px] max-[371px]:w-[298px] max-[371px]:left-[8%] max-[371px]:h-[218px] max-[364px]:w-[260px] max-[364px]:left-[13%] max-[364px]:h-[187px] max-[344px]:left-[10%] max-[331px]:left-[11.5%]">

                    <img className='absolute top-[-3px] left-[129px] max-[404px]:left-[37.5%] max-[364px]:left-[37.5%] max-[364px]:h-[65px]' src={image} alt="avatar" />
                    <div className="text-lg leading-[21px] text-center capitalize text-title-text font-Gilroy-Bold my-[5px] max-[364px]:text-[16px] max-[364px]:leading-[11px] max-[364px]:text-[10px] max-[364px]:leading-[11px]">{title}</div>
                    <div className="text-xs leading-[14px] text-center text-title-text opacity-60 font-Gilroy-Regular">{name}</div>
                    <div className="text-sm leading-4 text-center text-title-text opacity-80 w-[252px] m-auto font-Gilroy-Regular my-[22px] max-[404px]:my-[9px] max-[364px]:text-[10px] max-[364px]:leading-4 max-[364px]:w-[217px]"><q>{review}</q> </div>
                    <img className='w-[100px] m-auto max-[364px]:w-[68px]' src={star} alt="star" />
                </div>
            </div>
        </>
    )
}

export default ClientCard

