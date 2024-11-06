import React from "react";
import shoe from "../assets/shoepng.png"
import amazon from "../assets/amazon.png"
import flipkart from "../assets/flipkart.png"

const HeroSection = () => {
  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="h-80 text-8xl leading-custom-102 max-w-2xl mb-4 text-20 font-extrabold dark:text-black">
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-xl text-gray-500 lg:mb-8 dark:text-gray-600">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-customRed"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="text-gray-600 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-600"
          >
            Category
          </a>
          <div className="refers">
            <div className="py-5">Also Available On</div>
            <div className="flex gap-5">
            <a className="inline-flex w-10" href="#"><img src={flipkart} alt="" /></a>
            <a className="inline-flex w-10" href="#"><img src={amazon} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-[150%] relative top-1 right-40 ">
          <img
            src={shoe}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
