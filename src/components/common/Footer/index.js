import React from 'react'
import fb from '../../../assets/image/icon/fb.png'
import instagram from '../../../assets/image/icon/instagram.png';
import twitter from '../../../assets/image/icon/twitter.png';
const Footer = () => {
    return (
        <>
            <footer className='bg-selling-bg px-[108px] max-xl:px-[34px]'>
                <div className='container mx-auto'>
                    <div className="py-[118px] max-xl:py-[63px]">
                        <div className='flex flex-col xl:flex-row'>
                            <div className='xl:w-1/3 w-full'>
                                <div className='max-xl:flex max-xl:items-center max-xl:justify-center max-xl:flex-col max-xl:text-center'>
                                    <div className="text-[28px] font-Gilroy-Bold leading-[33px] tracking-[0.01em] capitalize text-title-text mb-[19px] max-xl:mb-[1px]">
                                        Panto
                                    </div>
                                    <div className="w-[293px] text-[15px] leading-[160%] text-title-text opacity-80 font-Gilroy-Medium">
                                        The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                                    </div>
                                </div>
                            </div>
                            <div className='xl:w-2/3 w-full max-lg:mt-5'>
                                <div className='flex items-start justify-around flex-wrap'>
                                    <div className="footer-link">
                                        <li className="link">Services</li>
                                        <li className="link">Email Marketing</li>
                                        <li className="link">Campaigns</li>
                                        <li className="link">Branding</li>
                                    </div>
                                    <div className="footer-link">
                                        <li className="link">Furniture</li>
                                        <li className="link">Beds</li>
                                        <li className="link">Furniture</li>
                                        <li className="link">All</li>
                                    </div>
                                    <div className="footer-link ">
                                        <li className="link">Follow Us</li>
                                        <li className="link social-link flex items-center gap-5 max-sm:justify-center">
                                            <div className='w-[20px] inline-block'> <img src={fb} alt="fb" /></div>
                                            Facebook
                                        </li>
                                        <li className="link social-link flex items-center gap-5 max-sm:justify-center">
                                            <div className='w-[20px] inline-block'> <img src={twitter} alt="twitter" /></div>
                                            Twitter
                                        </li>
                                        <li className="link social-link flex items-center gap-5 max-sm:justify-center">
                                            <div className='w-[20px] inline-block'> <img src={instagram} alt="instagram" /></div>
                                            Instagram
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[58px] max-sm:flex-col max-sm:gap-[16px] sm:flex justify-between flex-wrap items-center hidden">
                        <div className='not-italic font-normal text-[15px] leading-5 tracking-[-0.204545px] text-footer-sub-link mix-blend-normal opacity-50 mt-2.5 font-DM-Sans max-sm:text-[13px]'>
                            Copyright © 2021
                        </div>
                        <div className='w-[267px] text-[15px] leading-[160%] text-title-text opacity-80 font-Gilroy-Medium flex justify-between max-sm:text-[13px] max-sm:w-full'>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                    <div className="py-[58px] max-sm:flex-col max-sm:gap-[16px] flex justify-between flex-wrap items-center sm:hidden">
                        <div className='w-[267px] text-[15px] leading-[160%] text-title-text opacity-80 font-Gilroy-Medium flex justify-between max-sm:text-[13px] max-sm:w-full items-center max-xs:flex-col'>
                            <div>Terms & Conditions</div>
                            <div className='not-italic font-normal text-[15px] leading-5 tracking-[-0.204545px] text-footer-sub-link mix-blend-normal opacity-50 font-DM-Sans max-sm:text-[13px]'>Copyright © 2021</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer