"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import DoctorImg1 from "@/public/assets/doctor-img1.png";
import BlurImg1 from "@/public/assets/blur-ball-hero1.png";
import BallImg1 from "@/public/assets/ball1-hero.png";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

export default function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // smooth parallax effects for hero section y axisi
    const contentHeroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: false });
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"], { clamp: false });
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"], { clamp: false });
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"], { clamp: false });
    const y4 = useTransform(scrollYProgress, [0, 1], ["-10%", "190%"], { clamp: false });
    // content animation follow scroll and fade out
    const HeroContentAnimation = useTransform(scrollYProgress, [0, 1], ["-10%", "120%"], { clamp: false });


    return (
        <div className="hero-section pt-[80px] relative" ref={containerRef}>
            {/* first big left ball ovrlay in hero section animation o */}
            <div className="container mx-auto relative ">
                <motion.div
                    className="absolute left-[-190px] !top-[-150] z-[40]"
                    animate={{
                        y: ["1px", "20px", "20px", "-20px", "0px"],
                    }}
                    transition={{
                        duration: 5,
                        ease: [0.42, 0, 0.58, 1],
                        repeat: 0,
                        repeatType: "loop",
                    }}
                >
                    <Image
                        src={BlurImg1}
                        alt="Blurred Ball"
                        className="filter blur-sm"
                        width={290}
                        height={0}
                        priority
                    />
                </motion.div>
                <motion.div
                    className="absolute  left-[-120px] bottom-[-1100px] z-[40]"
                    animate={{
                        y: ["1px", "2px", "20px", "-20px", "0px"],
                    }}
                    transition={{
                        duration: 3,
                        ease: [0.42, 0, 0.58, 1],
                        repeat: 0,
                        repeatType: "loop",
                    }}
                >
                    <Image
                        src={BlurImg1}
                        alt="Blurred Ball"
                        className="filter blur-sm"
                        width={300}
                        height={0}
                        priority
                    />
                </motion.div>
            </div>
            {/* main content of hero section */}
            <div className="container hero-container !w-[94%] h-[500px] mx-auto z-[10] flex flex-col md:flex-row items-center justify-between  relative">
                {/* this div for overlay layer for hero section */}
                <div className="absolute inset-0  z-[5] bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/30 rounded-[68px]  border-black    " />
                <div className="balls-section2 absolute">
                    <motion.div className="absolute  left-[20px] top-[30px] z-[3]"
                        style={{ y: y3 }}
                    >
                        <Image src={BallImg1} alt="Small Ball" width={150} height={0} priority />
                    </motion.div>
                    {/* third left ball ovrlay in hero section */}
                    <motion.div className="absolute bottom-4 left-[20px] top-[330px] z-[3]"
                        style={{ y: y3 }}
                    >
                        <Image src={BallImg1} alt="Small Ball" width={150} height={0} priority />
                    </motion.div>
                    {/* fourth right back ball ovrlay in hero section */}
                    <motion.div className="absolute bottom-4 right-[350px] top-[-80px] z-[1]"
                        style={{ y: y2 }}
                    >
                        <Image src={BallImg1} alt="Small Ball" width={150} height={0} priority />
                    </motion.div>
                </div>
                          <motion.div
                            className="absolute left-[60%] top-[-60px] z-[-3]"
                        >
                            <Image
                                src={BallImg1}
                                alt="Small Floating Ball"
                                width={150}
                                height={0}
                                priority
                            />
                        </motion.div>

                {/*left section of hero section (doctor image)*/}
                <div className="box-left w-full h-full relative z-5">
                    <Image src={DoctorImg1} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" height={0} alt="Hero Image" fill className="object-fill absolute !top-[-93px] !left-[-50px] !h-[110%]" priority />
                    {/* second ball ovrlay in hero section */}
                    <motion.div className="absolute lg:left-[5%] top-[40%] z-[-1]">
                        <motion.div style={{ y: y3 }}>
                            <Image
                                src={BallImg1}
                                alt="Small Floating Ball"
                                width={120}
                                height={0}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div className="absolute lg:left-[42%] bottom-[160px] z-[-1]"
                    >
                        <motion.div style={{ y: y3 }}>
                            <Image
                                src={BallImg1}
                                alt="Small Floating Ball"
                                width={200}
                                height={0}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    </motion.div>
                </div>
                {/*right section of hero section texts*/}
                <motion.div className="box-right relative md:ml-[-100px] w-full h-full flex flex-col justify-center text-white text-center md:text-left mt-6 md:mt-0 z-20"
                    style={{
                        y: HeroContentAnimation,
                        opacity: contentHeroOpacity
                    }}
                >
                    {/* content of hero section */}
                    <div className="content-box">
                        <motion.h1 className="text-[52px] font-bold text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Where innovation starts
                        </motion.h1>
                        {/* buttons of hero section */}
                        <motion.div className="download-buttons flex justify-center gap-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            {/* App Store Button */}
                            <motion.a className="flex mt-3 w-48 h-14 bg-transparent text-white border border-white rounded-xl items-center justify-center hover:bg-white/10 transition-colors duration-300"
                                href="#"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                rel="preload"
                            >
                                <div className="mr-3 app-store-icon ">
                                    <FaApple className="text-[30px]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight">Download on the</div>
                                    <div className="text-xl font-semibold font-sans -mt-0.5">App Store</div>
                                </div>
                            </motion.a>
                            {/* Google Play Button */}
                            <motion.a  className="flex mt-3 w-48 h-14 bg-transparent text-white border border-white rounded-xl items-center justify-center hover:bg-white/10 transition-colors duration-300"
                                href="#"
                                rel="preload"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="mr-3 app-store-icon ">
                                    <FaGooglePlay className="text-[30px]" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] leading-tight">Get it on</div>
                                    <div className="text-xl font-semibold font-sans -mt-0.5">Google Play</div>
                                </div>
                            </motion.a>
                        </motion.div>
                        {/* five left small ball ovrlay in hero section */}
                        <motion.div
                            className="absolute right-[160px] top-[130px] z-[3]"
                        >
                            <Image
                                src={BallImg1}
                                alt="Small Floating Ball"
                                width={50}
                                height={0}
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
                {/* ball */}
                <motion.div  className="absolute right-[-26px] bottom-[150px] z-[0]"
                    style={{
                        y: HeroContentAnimation,
                    }}
                >
                    <Image
                        src={BallImg1}
                        alt="Small Floating Ball"
                        width={60}
                        height={0}
                        priority
                    />
                </motion.div>
                {/* ball */}
                <motion.div className="absolute right-[520px] bottom-[30px] z-[0]"
                    style={{
                        y: y4,
                    }}
                >
                    <Image
                        src={BallImg1}
                        alt="Small Floating Ball"
                        width={150}
                        height={0}
                        priority
                    />
                </motion.div>



            </div>
        </div>
    );
}


