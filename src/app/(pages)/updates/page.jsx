"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import ProcedureImg1 from "@/public/assets/news/new1.png";
import ProcedureImg2 from "@/public/assets/news/new2.png";
import ProcedureImg3 from "@/public/assets/news/new3.png";
import ProcedureImg4 from "@/public/assets/news/new4.png";
import ProcedureImg5 from "@/public/assets/news/new5.png";
import OverLayImg from "@/public/assets/news/news-overlay.svg";

import BlurImg1 from "@/public/assets/blur-ball-hero1.png";
import BallImg1 from "@/public/assets/ball1-hero.png";

import FaceBookIcon from "@/public/assets/news/facebook.svg";
import InstaIcon from "@/public/assets/news/insta.svg";
import TwitterIcon from "@/public/assets/news/twitter.svg";

import { IoIosArrowDown } from "react-icons/io";

export default function OurApp() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsData = [
    {
      image: ProcedureImg1,
      question: "Dr. Samkari showcases his latest cosmetic techniques.",
      answer:
        "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
        "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
      answerSpan:
        "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
    },
    {
      image: ProcedureImg2,

      question: "Dr. Samkari attends top cosmetic conferences in Milan.",
      answer:
        "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
        "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. " +
        "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
      answerSpan:
        "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
    },
    {
      image: ProcedureImg3,

      question: "Dr. Samkari attends top cosmetic conferences in Milan.",
      answer:
        "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
        "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
      answerSpan:
        "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
    },
    {
      image: ProcedureImg4,

      question: "Dr. Samkari showcases his latest cosmetic techniques.",
      answer:
        "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
        "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
      answerSpan:
        "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
    },
    {
      image: ProcedureImg5,
    },
  ];
  return (
    <div className="updates-page overflow-hidden px-5">
      <div className="container mx-auto text-[30px] text-center">
        <div className="content md:w-[90%]  lg:w-[75%]  mx-auto pt-[200px]">
          <div className="box-procedure">
            <div className="box-text ">
              {faqsData.map((faq, index) => (
                <div key={index} className="  mb-[50px]">
                  <div
                    className={`box-img bg-white relative rounded-t-[35px] ${
                      index == 4 ? "rounded-[35px]" : ""
                    }  `}
                  >
                    {index == 0 && (
                      <div className="balls">
                        <div className="absolute  left-[-33%] bottom-[-0px] z-[40]">
                          <Image
                            src={BlurImg1}
                            alt="Blurred Ball"
                            className="filter blur-sm opacity-[0.5]"
                            width={250}
                            height={0}
                            priority
                          />
                        </div>
                        <div className="absolute  right-[-20%] top-[-60px] z-[40]">
                          <Image
                            src={BlurImg1}
                            alt="Blurred Ball"
                            className="filter blur-[3px]"
                            width={80}
                            height={0}
                            priority
                          />
                        </div>
                           <div className="absolute flex flex-col text-white left-[2%] top-[10px] z-[50]">
                          <span className="text-[#f7e8e8] text-[20px] text-left">Dr.Zaid Samkari</span>
                         <span className="text-[#f7e8e8] text-[15px] text-left">2 weeks ago</span>
                        </div>
                      </div>
                    )}

                    {index == 2 && (
                      <div className="balls">
                        <div className="absolute  right-[-40%] bottom-[-10px] z-[40]">
                          <Image
                            src={BlurImg1}
                            alt="Blurred Ball"
                            className="filter w-[250px] sm:w-[270px] blur-[3px]"
                            width={30}
                            height={0}
                            priority
                          />
                        </div>
                      </div>
                    )}
                    {index == 3 && (
                      <div className="balls">
                        <div className="absolute  left-[-22%] bottom-[-20%] z-[40]">
                          <Image
                            src={BlurImg1}
                            alt="Blurred Ball"
                            className="filter blur-[8px]"
                            width={120}
                            height={0}
                            priority
                          />
                        </div>
                      </div>
                    )}

                    <Image
                      src={faq.image}
                      width={0}
                      height={0}
                      className=" w-full !h-[250px] md:!h-[250px] lg:!h-[300px] rounded-[35px]  "
                      alt="new1"
                    />
                    {index == 4 && (
                      <div className="balls">
                        <div className="absolute w-[105%] h-[100%]  overflow-hidden  left-[-2%] bottom-[0px] z-[40]">
                          <Image
                            src={OverLayImg}
                            alt="Blurred Ball"
                            className="filter blur-[8px] w-full mt-[-30px]"
                            width={200}
                            height={0}
                            priority
                          />
                        </div>
                        <div className="absolute flex flex-col text-white left-[2%] top-[10px] z-[50]">
                          <span className="text-[#f7e8e8] text-[25px] text-left">Dr.Zaid Samkari</span>
                         <span className="text-[#f7e8e8] text-[17px] text-left">2 weeks ago</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={` qusetion-bottom ${index == 4 ? "hidden" : ""}`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className={`bg-white cursor-pointer ${
                        openIndex === index ? "" : " duration-0 rounded-b-2xl"
                      }  w-full px-6 pt-4 pb-2 text-left flex justify-between items-center focus:outline-none`}
                    >
                      <span className="font-meduim text-[30px]">{faq.question}</span>
                      <div className="arrow-icon">
                        <IoIosArrowDown
                          className={` cursor-pointer !font-extrabold text-[35px] transform transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`px-6  bg-white rounded-b-2xl text-gray-800 transition-all duration-300 overflow-hidden ${
                        openIndex === index ? "max-h-[450px] py-0" : "max-h-0"
                      }`}
                    >
                      <p className="text-xl text-left  ">{faq.answer}</p>
                      <p className="text-xl text-left pt-5 pb-5">
                        {faq.answerSpan}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
              <div className="social flex justify-center gap-13 pt-[20px]">
                <Image
                  src={FaceBookIcon}
                  alt="Blurred Ball"
                  className="filter cursor-pointer "
                  width={30}
                  height={0}
                  priority
                />
                <Image
                  src={InstaIcon}
                  alt="Blurred Ball"
                  className="filter cursor-pointer "
                  width={50}
                  height={0}
                  priority
                />
                <Image
                  src={TwitterIcon}
                  alt="Blurred Ball"
                  className="filter cursor-pointer "
                  width={50}
                  height={0}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="balls relative h-12 container w-[90%]">
          <div className="absolute  right-[-15%] bottom-[-2%] z-[40]">
            <Image
              src={BlurImg1}
              alt="Blurred Ball"
              className="filter blur-[3px] opacity-[0.5]"
              width={150}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="footer-news text-center pt-20 text-gray-600">
          Unlock a ready-made, fully functional app designed by a top plastic
          surgeon to simplify clinic management, enhance patient experience, and
          boost retention. From smart bookings to loyalty rewards, this code is
          plug-and-play — built with real clinic needs in mind. Invest once, and
          turn complexity into clarity for any aesthetic business. Scalable.
          Elegant. Proven.
        </div>
      </div>
    </div>
  );
}
