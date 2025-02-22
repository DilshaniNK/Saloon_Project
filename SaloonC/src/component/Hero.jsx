import React from 'react'
import { FaPlay } from 'react-icons/fa'
import RotatedText from './RotatedText'
const Hero = () => {
    const Card = () => {
        return (
            <div className='relative w-full h-[350px] flex justify-center items-center ' data-aos="fade-up" data-aos-delay="300">
                <img src="/offer" alt=""  className='absolute left-0 z-20'/>
                <img src='' alt="" className='absolute top-0 z-10 object-cover h-full' />
                <div className='z-20 border border-white w-[95%] h-[90%] mx-auto'>
                    <div className='absolute flex flex-col items-baseline justify-center pl-12h-[90%]'>
                        <h4 className='text-main lg:text-[40px] text:[30px]'>10%</h4>
                        <h3 className='lg:text-[40px] text:[30px] uppercase font-bold pb-4 w-4/5'>{''}</h3>
                        <button className='font-serif text-xs text-white bg-main py-4px-12 trasition-bg hover:bg-black '>BOOK Now</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='min-h-[80vh]'>
                <div className="bg-[url('/')] bg-no-repeat lg:absolute bg-cover bg-center w-full top-0 ">
                    <div>
                        <img
                            src="/slider"
                            alt=""
                            className='absolute top-0 right-0 hidden lg:block '
                        />
                        <img
                            src="/slider"
                            alt=""
                            className='absolute bottom-0 left-0 hidden lg:block '
                        />
                    </div>
                    <div className='max-w-[1200px] mx-auto xl:px-0 px-6 lg:mt-60 lg:flex items-center '>
                        <div className='relative z-10 lg:w-1/2 ' data-aos="fade-right" data-aos-delay="300">
                            <h6 className='mb-4 font-semibold text-textColo'>Natural approach to better health</h6>
                            <h2 className='uppercase mb-9 lg:text-[70px] font-semibold lg:leading-[70px]'>Discover place where you feel magical</h2>
                            <button className='px-12 py-4 text-xs font-semibold text-white bg-main transition-bg hover:bg-black hover:text-white'>DISCOVER MORE</button>
                        </div>
                        <div className='mt-8 lg:mt-0' data-aos="fade-left" data-aos-delay="300">
                            <div className='z-10 rounded realative-[250px] flex items-center justify-center lg:h-[622px] h-[480px]'>
                                <img src="/slider" alt="" className='lg:absolute rounded-[250px] top-0 lg:h-full z-10' />
                                <img src="/slider" alt="" className='relative z-10 hidden lg:block main_slider_three_img' />
                                <img src="/slider" alt="" className='absolute hidden left-4 top-4 main-slider_three_leaf_two lg:block' />
                                <img src="/slider" alt="" className='absolute bottom-0 hidden right-16 main-slider-three_leaf_two lg:block' />
                                <img src="/slider" alt="" className='absolute top-0 z-10 hidden lg:block right-8 about_three_thumb_flower_img' style={{ rotate: '90deg' }} />
                                <div className='absolute bottom-0 left-0 right-0 z-10 flex justify-center lg:block'>
                                    <div className='relative flex items-center justify-center bg-white rounded-full w-[173px] h-[173px] main-slider-three_left_text'>
                                        <RotatedText />
                                        <div className='absolute flex items-center justify-center text-white rounded-full bg-main w-[95px] h-[95px]'>
                                            <FaPlay size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='my-16'>
                <div className='flex-col gap-4 lg:flex-row max-w-[1600px] mx-auto px-6'>
                    <Card image='/offer' text='spa & beauty treatment' />
                    <Card image='/offer' text='spa & beauty treatment' />
                </div>
                <div className='justify-between gap-12 my-16 lg:flex max-w-[1200px] mx-auto xl:px-0 px-6'>
                    <div className='relative lg:w-1/3' data-aos="zoom-in-up" data-aos-delay="300">
                        <img src="" alt="" className='absolute z-20 left-8 about_three_thumb_flower_img' />
                        <img src="" alt="" className='relative z-10 rounded-full' />
                        <img src="" alt="" className='absolute left-0 main_slider_three_img bottom-14'/>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    )
}

export default Hero