"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImgIphnoe from "@/public/assets/iphone4.png";
// import ImgDimond from "@/public/assets/Diamond.gif";
import ImgDimond2 from "@/public/assets/Diamond3.gif";

export default function PointsSection() {
  return (
    <div className="pointssection pt-0 pb-20">
      <div className="container mx-auto">
        <div className="content flex flex-col items-center">
          {/* Text title for ponits section */}
          <div className="box-text w-[80%] lg:w-[60%] text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-5xl  text-center flex justify-center items-center gap-3"
            >
              <span className="text-5xl ">

                Points That <span className="font-bold">Pay Off</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="text-1xl   md:text-[22px] lg:w-[75%] mx-auto"
            >
              Loyalty built in: patients earn points with every visit, unlocking
              free procedures through gamified engagement.
            </motion.h2>
          </div>

          {/* Phone and dimond gif image */}
          <div className="box-phone relative mt-[360px] w-full  h-full">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="relative w-full h-[250px] flex justify-center"
            >
              <div className="box-img-iphone w-[80%] relative">
                <Image
                  src={ImgIphnoe}
                  alt="Hero Image11"
                  fill
                  className="py-18 !w-[100%] "
                  priority={false}
                />
              </div>
            </motion.div>

            {/* Diamond */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: false }}
              className="absolute left-0 !top-[-320px] w-full flex justify-center z-50"
            >
              <Image
                src={ImgDimond2}
                alt="Diamond"
                width={550}
                height={500}
                className="object-contain !w-[770px]"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
