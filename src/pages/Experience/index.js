import React from 'react'
import ContentBox from '../../components/Experience/ContentBox'
import box1 from './../../assets/image/icon/box-1-new.png'
import box2 from './../../assets/image/icon/box-2-new.png'
import './experience.scss';

const Experience = () => {
    return (
        <div className='experience my-[240px] max-xl:my-[130px] max-[705px]:my-[90px] max-sm:my-[92px]'>
            <div className="container-fluid">
                <div className="flex items-center max-xl:flex-col">
                    <div className="xl:w-1/2 w-full">
                        <div className="experience-image relative h-[520px] w-full max-[705px]:w-[70%] max-[705px]:h-[380px] max-[460px]:h-[316px] max-[511px]:w-full max-[350px]:h-[256px]">
                            <img className='max-w-full absolute top-0 left-0' src={box1} alt="box1" />
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full">
                        <ContentBox header='experiences' title='we provide you the best experience' content='You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials' />
                    </div>
                </div>
            </div>
            <div className="material max-[350px]:mt-[88px]">
                <div className="container-fluid">
                    <div className="flex flex-row-reverse max-xl:flex-col">
                        <div className="xl:w-1/2 w-full">
                            <div className="material-image">
                                <img src={box2} alt="box1Right" />
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