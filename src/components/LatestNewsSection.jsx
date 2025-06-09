"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BorderIphoneImg from "@/public/assets/border-iphone.png";
import LatestNewsImg from "@/public/assets/paper.png";
import ImgBall from "@/public/assets/ball1-hero.png";

export default function LatestNewsSection() {
  // bubbles data
  const bubblesLatestNews = [
        { left: "-14%", top: "10%", width: "70px", height: "70px", zIndex: -2,blur:"3px",opacity:"80" },
    { right: "-14%", top: "50px", width: "130px", height: "130px", zIndex: -2,blur:"3px" },
    { left: "90px", top: "100px", width: "120px", height: "120px", blur: "5px",opacity:"50", zIndex: -2 },
    { right: "6%", top: "8%", width: "50px", height: "50px", zIndex: 10 },
    { left: "0%", top: "25%", width: "70px", height: "70px", zIndex: 10 },
    { right: "10%", top: "250px", width: "100px", height: "100px", blur: "5px", zIndex: 10 },
    { left: "9%", top: "40%", width: "160px", height: "160px", blur: "2px", zIndex: -2 },
    { right: "7%", top: "50%", width: "200px", height: "200px", blur: "2px", zIndex: -2 },
    { right: "-150px", top: "580px", width: "120px", height: "120px", blur: "8px",opacity:"80", zIndex: -2 },
  ];
  return (
    <div className="pointssection py-5">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="content flex flex-col w-full h-full items-center">
            <div className="box-phone relative w-[90%] h-full">
              {/* balls of newssection */}
              <div className="balls">
                {bubblesLatestNews.map((bubble, index) => (
                  <div
                    key={index}
                    className={`absolute ${bubble.opacity ? `opacity-50` : "" } `}
                    style={{
                      left: bubble.left,
                      right: bubble.right,
                      top: bubble.top,
                      width: bubble.width,
                      height: bubble.height,
                      zIndex: bubble.zIndex,
                    }}
                  >
                    <Image
                      src={ImgBall}
                      alt="ball"
                      fill
                      className={`!w-[${bubble.width}] !h-[${bubble.height}] ${bubble.opacity }  ${bubble.blur ? `filter blur-[${bubble.blur}]` : "" }`}
                      priority={false}
                    />
                  </div>
                ))}
              </div>
              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="relative w-full h-[1200px]"
              >
                <Image
                  src={BorderIphoneImg}
                  alt="Hero Background"
                  fill
                  className="w-full !h-[550px]"
                  priority={false}
                />

                {/* expand Paper Image */}
                <motion.div
                  className="overflow-hidden relative "
                  initial={{ height: 100, width: "100%" }}
                  whileInView={{ height: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="  absolute top-[1px] left-1/2 -translate-x-1/2 w-[70%] h-full">
                    <Image
                      src={LatestNewsImg}
                      alt="Hero Background"
                      fill
                      className="w-full !h-full py-[50px] filter drop-shadow-2xl"
                      priority={false}
                    />
                  </div>

                  <h2 className="text-[100px] !text-8xl  w-[100%]  absolute top-[130px] left-[52%] transform -translate-x-1/3 z-50 text-black">
                    <a href="#" className="uppercase !font-emoji " style={{fontFamily:"auto"}}>
                      Latest News
                    </a>
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>


        <div className="box-news-text w-[100%] md:w-[90%] text-center pt-15 mx-auto">
          <div className="flex justify-center">
            <motion.a
              href="#"
              rel="preload"
              className="flex mt-3 p-3  bg-transparent text-black border-2 border-black rounded-xl items-center justify-center hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-left ">
                <div className="text-[35px] font-bold leading-tight">
                  Upgrade Your Clinic
                </div>
                <div className="text-xl text-center font-semibold font-sans ">
                  {" "}
                  BUY OUR CODE
                </div>
              </div>
            </motion.a>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="text-2xl md:text-2xl pt-20 leading-[30px]"
          >
            Unlock a ready-made, fully functional app designed by a top plastic surgeon to simplify clinic management,
            enhance patient experience, and boost retention. From smart bookings to loyalty rewards,
            this code is plug-and-play — built with real clinic needs in mind. Invest once, and turn complexity
            into clarity for any aesthetic business. Scalable. Elegant. Proven.
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
