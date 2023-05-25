import React from 'react'
import { HiShoppingBag } from 'react-icons/hi'
import { Navbar } from 'flowbite-react'
import './../../../assets/scss/style.scss';

const AppBar = () => {
    return (
        <>
            <Navbar
                className='pt-[41px] max-md:pt-[22px] max-sm:pt-[12px] mx-[80px] max-lg:mx-[50px] max-xs:mx-[23px]'
                fluid={false}
            >
                <Navbar.Brand href="/" className='text-[28px] leading-[33px] tracking-[0.01em] max-xl:text-[24px] max-md:text-[21px] capitalize'>
                    Panto
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className='relative'>
                        <HiShoppingBag size={30} />
                        <div className="absolute px-[3px] right-[-2px] top-[4px] bg-bag-bg rounded-[105px] text-[12px] text-white font-bold">0</div>
                    </div>
                    <Navbar.Toggle className='hover:bg-transparent focus:outline-none focus:ring-0 focus:ring-transparent text-gray-50' />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className='navLink-text' href="/">Furniture</Navbar.Link>
                    <Navbar.Link className='navLink-text' href="/">Shop</Navbar.Link>
                    <Navbar.Link className='navLink-text' href="/">About Us</Navbar.Link>
                    <Navbar.Link className='navLink-text' href="/">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default AppBar

