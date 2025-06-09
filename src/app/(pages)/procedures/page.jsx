"use client";

import { useState } from "react";
import Image from "next/image";
import ImgProced1 from "@/public/assets/procedures/proced-img-main.svg";
import ImgProced2 from "@/public/assets/botx1.png";
// supporter company imgs
import ImgSupporter1 from "@/public/assets/procedures/Precedures-icon1.svg";
import ImgSupporter2 from "@/public/assets/procedures/Precedures-icon2.svg";
import ImgSupporter3 from "@/public/assets/procedures/Precedures-icon3.svg";
import ImgSupporter4 from "@/public/assets/procedures/Precedures-icon4.svg";
import ImgSupporter5 from "@/public/assets/procedures/Precedures-icon5.svg";
import ImgSupporter6 from "@/public/assets/procedures/Precedures-icon6.svg";
import ImgSupporter7 from "@/public/assets/procedures/Precedures-icon7.svg";
import ImgSupporter8 from "@/public/assets/procedures/Precedures-icon8.svg";
import ImgSupporter9 from "@/public/assets/procedures/Precedures-icon9.svg";
import ImgSupporter10 from "@/public/assets/procedures/Precedures-icon10.svg";
import ImgSupporter11 from "@/public/assets/procedures/Precedures-icon11.svg";
import ImgSupporter12 from "@/public/assets/procedures/Precedures-icon12.svg";
import ImgSupporter13 from "@/public/assets/procedures/Precedures-icon13.svg";

// imgs before and after
import ImgBefore1 from "@/public/assets/procedures/img-before1.jpg";
import ImgBefore2 from "@/public/assets/procedures/img-before2.jpg";
import ImgBefore3 from "@/public/assets/procedures/img-before3.jpg";
import ImgBefore4 from "@/public/assets/procedures/img-before4.jpg";
import ImgBefore5 from "@/public/assets/procedures/img-before5.jpg";
import ImgBefore6 from "@/public/assets/procedures/img-before6.jpg";
import ImgAfter1 from "@/public/assets/procedures/img-after1.jpg";
import ImgAfter2 from "@/public/assets/procedures/img-after2.jpg";
import ImgAfter3 from "@/public/assets/procedures/img-after3.jpg";
import ImgAfter4 from "@/public/assets/procedures/img-after4.jpg";
import ImgAfter5 from "@/public/assets/procedures/img-after5.jpg";
import ImgAfter6 from "@/public/assets/procedures/img-after6.jpg";

import ImgAfter22 from "@/public/assets/procedures/img.png";

export default function ProceduresSection() {
  // images for company supporter
  const supporterImages = [
    ImgSupporter1,
    ImgSupporter2,
    ImgSupporter3,
    ImgSupporter4,
    ImgSupporter5,
    ImgSupporter6,
    ImgSupporter7,
    ImgSupporter8,
    ImgSupporter9,
    ImgSupporter10,
    ImgSupporter11,
    ImgSupporter12,
    ImgSupporter13,
  ];

  return (
    <section className="proceduers-page px-3 pb-12 pt-[120px]">
      <div className="container px-6 md:px-0 mx-auto">
        <div className="content grid gap-6 grid-cols-1  md:grid-cols-[auto_1fr] lg:lg:grid-cols-3 lg:w-[79%] mx-auto">
          {/* image section */}
          <div className="flex justify-center items-center flex-col h-full">
            <Image
              src={ImgProced1}
              width={80}
              height={240}
              alt="Aesthetic procedure"
              className="rounded-3xl object-cover object-right w-[300px] h-[200px] md:w-[280px] lg:w-[380px] md:h-[280px] lg:h-[310px]"
              quality={100}
            />
          </div>

          {/* text section */}
          <div className="ml-0  mx-auto col-span-2">
            <div className="text-box w-[100%] mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-[30px] lg:p-0">
                Procedures
              </h2>
              <h3 className="text-xl font-semibold italic text-gray-900 mb-0">
                How it Works?
              </h3>
              <p className="text-gray-800 mb-6 leading-[20px] lg:w-[90%]">
                Dr. Zaid Samkari is a prominent Jordanian aesthetic doctor and
                cosmetic surgeon based in Amman, renowned for his expertise in
                non-surgical facial rejuvenation and advanced aesthetic
                techniques. CRISALIX
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-0">
                Results
              </h3>
              <p className="text-gray-800 leading-[20px]">
                Dr. Samkari earned his medical degree from the Jordan University
                of Science and Technology. Initially trained as a general
                surgeon, he later specialized in aesthetic medicine, focusing on
                non-invasive procedures. His early exposure to humanitarian
                medical missions, where he assisted in translating for European
                doctors performing free surgeries for children with congenital
                malformations, inspired his passion for aesthetic medicine.
              </p>
            </div>
          </div>
        </div>
        {/* partener company */}
        <div className="mt-12 lg:w-[84%] mx-auto pt-[40px]">
          {/* Grid for all except last 3 */}
          <div className="supporter grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5 gap-x-6 gap-y-12 justify-center items-center">
            {supporterImages
              .slice(0, supporterImages.length - 3)
              .map((img, index) => (
                <div
                  key={index}
                  className="box-im w-[150px] sm:w-[180px] md:w-[185px] flex justify-end"
                >
                  <Image
                    src={img}
                    width={140}
                    height={50}
                    alt={`Supporter ${index + 1}`}
                    className={` ${index == 5 ? "!h-20" : ""
                      }  w-[100px] sm:w-[160px] h-[40px] object-contain cursor-pointer`}
                    quality={100}
                  />
                </div>
              ))}
          </div>

          {/* Flex for last 3 images */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-22 gap-y-12">
            {supporterImages.slice(-3).map((img, index) => (
              <div
                key={`flex-${index}`}
                className="box-im w-[150px] sm:w-[180px] md:w-[185px] flex justify-end"
              >
                <Image
                  src={img}
                  width={140}
                  height={50}
                  alt={`Supporter ${supporterImages.length - 2 + index}`}
                  className="w-[100px] sm:w-[170px] h-[40px] object-contain cursor-pointer"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* images before and after */}
        <div className=" box-before-after mt-12 lg:w-[82%]  mx-auto pt-[50px]">

          <div className="supporter relative flex flex-wrap gap-x-6 gap-y-12 justify-center items-center">
            <div className="before-text text-gray-500 font-bold absolute left-[-25px] top-[25%] transform rotate-[-90deg] ">
              Before
            </div>
            <Image
              src={ImgAfter22}
              width={0}
              height={0}
              alt={`Supporter `}
              unoptimized
              className={`!w-[100%] md:h-auto h-[490px] cursor-pointer `}
            />
            <div className="after-text text-gray-500 font-bold absolute left-[-20px] bottom-[25%] transform rotate-[-90deg] ">
              After
            </div>
          </div>
        </div>
        {/* proceduers footer text */}
        <div className="container lg:w-[86%] px-6 mx-auto">
          {/* text footer */}
          <div className="text-footer text-gray-700 pt-[80px] text-center">
            Unlock a ready-made, fully functional app designed by a top plastic
            surgeon to simplify clinic management, enhance patient experience,
            and boost retention. From smart bookings to loyalty rewards, this
            code is plug-and-play — built with real clinic needs in mind. Invest
            once, and turn complexity into clarity for any aesthetic business.
            Scalable. Elegant. Proven.
          </div>
        </div>
      </div>
    </section>
  );
}
