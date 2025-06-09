"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Test from "@/src/components/ProgressBar"
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ImgIphone from "@/public/assets/iphone2.png";
import ImgBall from "@/public/assets/ball1-hero.png";
import ImgButtonProgress from "@/public/assets/img-progress.svg";
import { IoIosArrowDown } from "react-icons/io";

export default function TrackProgressSection() {
    const containerRef = useRef(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { scrollYProgress } = useScroll();

    // Smooth parallax effects
    const contentHeroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: false });
    const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "80%"], { clamp: false });
    const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"], { clamp: false });
    const y3 = useTransform(scrollYProgress, [0, 1], ["20%", "-120%"], { clamp: false });
    const leftBoxWidth = useTransform(scrollYProgress, [0, 0.1], ["20%", "100%"]);
    const leftBoxOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const HeroContentAnimation = useTransform(scrollYProgress, [0, 1], ["0%", "20%"], { clamp: false });

    useEffect(() => {
        if (inView) {
            console.log();

            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    // animation title1 text for track section
    const textTopToBottom = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, ease: "easeOut", delay: 1 },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: -200,
        },
    };
    // animation title2 text for track section
    const textBottomToTop = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 1.8 },
        },
    };
    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-2deg"]);

    return (
        <div className="track-progress-section pt-[300px] " ref={containerRef}>
            <div className="container mx-auto hero-container block relative ">
                <div className="md:w-[100%] lg:w-[90%] 2xl:w-[77%] mx-auto h-[540px]">
                    {/* trackprogress balls1 */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                        className="absolute !top-[50px] !left-[-50px] z-1 "
                    >
                        <Image
                            src={ImgBall}
                            alt="Hero Image"
                            width={200}
                            height={120}
                            className="w-full h-full "
                            priority={false}
                        />
                    </motion.div>

                    {/* trackprogress balls2 */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="absolute !bottom-[-180px] !right-[60px] z-[20] "
                    >
                        <Image
                            src={ImgBall}
                            alt="Hero Image"
                            width={400}
                            height={0}
                            className="w-full h-full "
                            priority={false}
                        />
                    </motion.div>     
                     <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="absolute !bottom-[-50px] !left-[540px] z-[-20] "
                    >
                        <Image
                            src={ImgBall}
                            alt="Hero Image"
                            width={300}
                            height={0}
                            className="w-full h-full "
                            priority={false}
                        />
                    </motion.div>    
                    {/* trackprogress balls3 */}
                    <motion.div
                        className="absolute right-[100px] top-[80px] z-[3]"
                        style={{ y: y1 }}
                    >
                        <Image src={ImgBall} alt="Small Ball" width={50} height={0} priority />
                    </motion.div>
                    {/* trackprogress balls4 */}
                    <motion.div
                        className="absolute bottom-4 right-[800px] top-[30px] z-[-10]  animated-image"
                        style={{ y: y3 }}
                    >
                          <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 4, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                        className="absolute !top-[50px] !left-[-50px] z-1 "
                    >


                        <Image src={ImgBall} alt="Small Ball" width={230} height={0} priority />
                    </motion.div>
                    </motion.div>
                    {/* content  Section  */}
                    <div className=" relative mx-auto md:w-[100%] lg:w-[90%] left-0 h-full">
                        {/* this overlay background glass */}
                        <motion.div className="absolute left-0 inset-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/35 rounded-[68px]  border-white/75 z-2"
                            initial={{ width: 0, borderWidth: 0 }}
                            whileInView={{ width: "100%", borderWidth: "1px" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                        >
                        </motion.div>

                        {/* left box Iphone image with three buttons of progress bar */}
                        <motion.div className={`box-left  w-full h-full absolute top-0 left-0  z-[200] transition-all duration-700 `}
                            style={{
                                y: HeroContentAnimation,
                            }}
                            initial={{ y: 150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.div className="md:w-[45%] lg:w-[40%] h-[590px] relative left-[-13%]   ">
                                {/* iphone img */}
                                <Image
                                    src={ImgIphone}
                                    alt="Hero Image"
                                    className="absolute !top-[-93px] !left-[10px] !w-[380px] !h-[600px]  transform   "
                                    priority={false}
                                    fill
                                />
                                {/* button progress1 */}
                                <motion.div  className="absolute bottom-[230px] !left-[120px] h-[90px]  md:w-[300px]  lg:w-[400px]"
                                    href="#"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: false }}
                                    >
                                    <div className="box-image relative">
                                        <Image
                                            src={ImgButtonProgress}
                                            alt="Hero Image"
                                            className=" w-[400px] !h-[120px]"
                                            priority={false}
                                            fill

                                        />
                                        <div className="g absolute left-[50px] top-[50px]"></div>
                                    </div>


                                </motion.div>
                                {/* button progress2 */}
                                <motion.div  className="absolute bottom-[260px] !left-[150px] h-[90px]  md:w-[300px]  lg:w-[400px]"
                                    href="#"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                    viewport={{ once: false }}
                                      >
                                    <div className="box-image relative">
                                        <Image
                                            src={ImgButtonProgress}
                                            alt="Hero Image"
                                            className=" w-[400px] !h-[120px]"
                                            priority={false}
                                            fill

                                        />
                                        <div className="g absolute left-[50px] top-[50px]"></div>
                                    </div>


                                </motion.div>
                                {/* button progress3*/}
                                <motion.div className="absolute bottom-[290px] !left-[180px] h-[90px]  md:w-[300px]   lg:w-[400px]"
                                    href="#"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                    viewport={{ once: false }}
                                    >
                                    <div className="box-image relative">
                                        <Image
                                            src={ImgButtonProgress}
                                            alt="Hero Image"
                                            className=" w-[400px] !h-[120px]"
                                            priority={false}
                                            fill

                                        />
                                        <div className="g absolute left-[50px] top-[50px]"></div>
                                    </div>


                                </motion.div>
                                {/* button progress4*/}
                                <motion.div className="absolute bottom-[320px] !left-[220px] h-[90px]  md:w-[300px] lg:w-[400px]"
                                    href="#"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                                    viewport={{ once: false }}
                                    >
                                    <div className="box-image relative h-full">
                                        <Image
                                            src={ImgButtonProgress}
                                            alt="Hero Image"
                                            className=" w-[400px] !h-[120px]"
                                            priority={false}
                                            fill

                                        />
                                        <div className=" absolute left-[40px]  grid grid-cols-[auto_1fr] items-center gap-3  top-[0px] w-full h-full">
                                            <h2 className="left md:text-[15px] lg:text-xl text-gray-500 font-medium"> JALUPRO</h2>
                                            <div className="right">
                                                <div className="box-top w-[50%] pt-2">
                                                    <Test />
                                                </div>
                                                <div className="text-white md:text-[12px] lg:text-[15px] pt-1">SuperHYDRO From Jalupro (1st)</div>
                                                <div className="date pt-2 w-[70%] flex justify-between items-center">
                                                    <span>5 Mars 2025</span>
                                                    <span><IoIosArrowDown className="text-xl cursor-pointer" /></span>
                                                </div>


                                            </div>

                                        </div>
                                    </div>


                                </motion.div>
                            </motion.div>





                        </motion.div>
                        {/* right box text  */}
                        <motion.div className="box-right  w-[10%] z-[3] mx-auto absolute right-0 top-0 h-full flex flex-col justify-center text-white text-center md:text-left mt-6 md:mt-0  "
                            style={{
                                width: leftBoxWidth,
                                opacity: leftBoxOpacity,
                            }}
                        >
                            {/* text box for trackProgress section */}
                            <div className="content-box absolute bottom-[100px]  w-[100%]  text-4xl overflow-hidden text-black">
                                <div className=" pe-14 pb-10 flex flex-col justify-center items-end" ref={ref}>
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={textTopToBottom}
                                    >
                                        <div className="md:text-3xl lg:text-4xl"> Track <span className="md:text-4xl lg:text-5xl font-bold"> Progress</span> </div>
                                        <div className="text-4xl text-end">  Like Never Before  </div>
                                    </motion.div>


                                    <motion.div
                                        className="mt-5 text-end md:text-[18px] lg:text-[22px] lg:w-[45%]"
                                        initial="hidden"
                                        animate={controls}
                                        variants={textBottomToTop}
                                    >
                                        Patients follow their procedure journey with
                                        real-time percentage-based tracking. Data
                                        clarity = higher trust.

                                    </motion.div>


                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60