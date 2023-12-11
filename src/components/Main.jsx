import React from 'react'
import AccountImage from './../assets/img/accountImg.png'
import IntroductionImage from './../assets/img/pic.png'

const Main = () => {
  return (
    <div className=' bg-[#28293E] text-white'>
      <section >
        <div className="container flex-col-reverse items-center lg:items-start lg:flex-row  mx-auto justify-between  md:pt-[110px] pb-16 flex">
            <div className=" max-w-[513px] tracking-widest">
                <p className="introduction__title text-[#EF6D58] uppercase mb-6">Modern Studio</p>

                <h2 className="font-bold text-[56px] md:text-7xl mb-3 md:mb-6">We're Help To Build Your Dream Project</h2>

                <p className="opacity-60 mb-8">Agency provides a full service range including technical skills, design, business understanding.</p>
                <div className="flex items-center
                gap-[46px] mb-[48px] md:mb-[112px]">
                    <button className="bg-[#EF6D58] w-[154px] h-[48px] rounded-md font-extrabold text-[14px] introduction__btn">
                    How We Work
                    </button>
                    <button className="introduction__contact__btn introduction__btn">
                    Contact Us
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <img src={AccountImage} alt="account" className="w-12 h-12 rounded-full" />

                    <div className="introduction__account__inner__box">
                        <p className="opacity-60">"Put themselves in the merchant's shoes"</p>
                        <p className="introduction__account__fromWho">Meta Inc.</p>

                    </div>
                </div>
            </div>
            <img src={IntroductionImage} alt="just" className="md:w-[570px] sm:w-[400px] md:h-[602px] sm:h-[400px] w-[339px] h-[334px]" />
        </div>
      </section>
    </div>
  )
}

export default Main
