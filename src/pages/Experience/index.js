import React from 'react'
import ContentBox from '../../components/Experience/ContentBox'
import box1 from './../../assets/image/icon/box-1-new.png'
import box2 from './../../assets/image/icon/box-2-new.png'

const Experience = () => {
    return (
        <div className='experience my-[240px] max-xl:my-[130px] max-[705px]:my-[90px] max-sm:my-[92px]'>
            <div className="container-fluid">
                <div className="flex items-center max-xl:flex-col">
                    <div className="xl:w-1/2 w-full">
                        <div className="experience-image relative h-[520px] w-full max-[705px]:w-[70%] max-[705px]:h-[380px] max-[460px]:h-[316px] max-[511px]:w-full max-sm:h-[416px] max-[350px]:h-[256px]">
                            <img className='max-w-full absolute top-[2px] z-[1] max-[705]:left-[-62px] max-md:top-[-29px]' src={box1} alt="box1" />
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full">
                        <ContentBox header='experiences' title='we provide you the best experience' content='You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials' />
                    </div>
                </div>
            </div>
            <div className="material ml-[80px] mt-[394px] max-xl:mt-[245px] max-xl:ml-0 max-md:mt-[109px] max-[705px]:mt-[130px] ">
                <div className="container-fluid">
                    <div className="flex flex-row-reverse max-xl:flex-col">
                        <div className="xl:w-1/2 w-full">
                            <div className="material-image relative h-[520px] w-full max-[705px]:h-[450px] max-sm:h-[324px] max-xs:h-[250px]">
                                <img className='max-w-full absolute top-[-66px] right-0 z-[1] max-sm:max-w-[82%] max-sm:top-[-36px] max-[400px]:max-w-full max-[400px]:top-[7px]' src={box2} alt="box1Right" />
                            </div>
                        </div>
                        <div className="xl:w-1/2 w-full">
                            <ContentBox header='materials' title='Very serious materials for making furniture' content='Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience