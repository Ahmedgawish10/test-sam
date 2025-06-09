"use client";
import { motion, useScroll, useTransform, useAnimation, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import IphoneImg1 from "@/public/assets/iphone1.png";
import BallImg1 from "@/public/assets/ball1-hero.png";

export default function BookSection() {
    const containerRef = useRef(null);
    const controls = useAnimation();
    const [refTextBox, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { scrollYProgress } = useScroll();
    // Smooth parallax effects for  book section
    const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "80%"], { clamp: false });
    const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "1000px"], { clamp: false });
    const y3 = useTransform(scrollYProgress, [0, 1], ["20%", "-120%"], { clamp: false });
    const y4 = useTransform(scrollYProgress, [0, 1], ["290%", "40%"], { clamp: false });
    const leftBoxWidth = useTransform(scrollYProgress, [0, 0.1], ["20%", "100%"]);
    const leftBoxOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    // when user reach to the section that will animate run when leave off the animation
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    // animation text for book section text
    const textTopToBottom = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, ease: "easeOut", delay: 0.4 },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: -200,
        },
    };
    const textBottomToTop = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
        },
    };


    // for phone smooth spring.
    const springConfig = { stiffness: 140, damping: 30, mass: 1 };
    const [animateIphoneEnabled, setAnimateIphneEnabled] = useState(true);
    // Window height check
    const enabledIphoneRef = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            enabledIphoneRef.current = 0; 
            if (scrollY >= 1250) {
                setAnimateIphneEnabled(enabledIphoneRef.current)
            } else {
                setAnimateIphneEnabled(true)

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const checkIhoneYHeight = useTransform(
        scrollYProgress,
        [0, 0.9, 1],
        animateIphoneEnabled ? ["-170%", "150%", "0%"] : ["-110%", "-40%", "0%"]
    );

    const iphoneY = useSpring(checkIhoneYHeight, springConfig);




    const iphoneScale = useSpring(
        useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 1.05]),
        springConfig
    );
    const iphoneOpacity = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 1]),
        springConfig
    );


    return (
        <div className="book-section pt-[230px]" ref={containerRef}>
            <div className="container hero-container mx-auto  block relative">
                <div className="w-[70%] mx-auto h-[500px]">
                    {/* balls section 1 for book section */}
                    <div className="absolute w-full h-full top-0 left-0">
                        <motion.div className="absolute bottom-4 right-[20px] top-[-300px] z-[2]"
                            style={{ y: y1 }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={230} height={0} priority />
                        </motion.div>

                        <motion.div className="absolute  right-[48%] top-[33%] z-[-10] filter blur-[12px]"
                            style={{ y: y3 }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={180} height={0} priority />
                        </motion.div>

                        <motion.div className="absolute bottom-[100px] left-[300px] z-[20]"
                            style={{ y: y4 }}
                        >
                            <motion.div className="absolute bottom-4 right-[-120px] z-[2]"
                                style={{ y: y4 }}
                                initial={{ opacity: 0, scale: 0.4 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >

                                <Image src={BallImg1} alt="Small Ball" width={60} height={0} priority />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-[80px] left-[100px] z-[2]"
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.4 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={180} height={0} priority />
                        </motion.div>

                        <motion.div className="absolute bottom-[50px] right-[0%] z-[20]"
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.4 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={250} height={0} priority />
                        </motion.div>

                    </div>
                    {/* this div parent for (left and right) box for book section*/}
                    <div className="relative mx-auto w-[100%] left-0 h-full">
                        {/* this overlay div for book section */}
                        <motion.div className="absolute right-0 inset-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/35 rounded-[68px]  border-white/75 z-2 h-full"
                            initial={{ width: 0, borderWidth: 0 }}
                            whileInView={{ width: "100%", borderWidth: "1px" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                        </motion.div>

                        {/* this section for texts content for book section left */}
                        <motion.div className="box-right w-[10%] z-[200] mx-auto absolute right-0 top-0 h-full flex flex-col justify-center text-white text-center md:text-left mt-6 md:mt-0"
                            style={{
                                width: leftBoxWidth,
                                opacity: leftBoxOpacity,
                            }}
                        >
                            <div className="content-box absolute top-[120px] left-[50px] z-[200] w-[60%] text-4xl overflow-hidden text-black">
                                <div ref={refTextBox}>
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={textTopToBottom}
                                    >
                                        <div className="text-4xl">Book <span className="text-5xl font-bold">Smarter,</span> </div>
                                        <div className="text-4xl">Operate Better</div>
                                    </motion.div>
                                    {/* The text that will animate from top to bottom */}
                                    <motion.div
                                        className="mt-5 text-[22px]  w-[80%] lg:w-[70%]"
                                        initial="hidden"
                                        animate={controls}
                                        variants={textBottomToTop}
                                    >
                                        Let patients book their treatments through a
                                        seamless, clinic-branded app — anytime,
                                        anywhere.
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* iPhone section */}
                        <motion.div className="box-left order-1 w-full h-full absolute top-0 left-0 z-50" >
                            <motion.div className="w-[50%] top-[450px] relative right-[-62%] 2xl:right-[-65%]"
                             style={{
                                y: iphoneY,
                                scale: iphoneScale,
                                opacity: iphoneOpacity,
                                willChange: 'transform, opacity',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden'
                            }}
                            >
                                <Image
                                    src={IphoneImg1}
                                    alt="Hero Image"
                                    width={400}
                                    height={580}
                                    className="!w-[400px] !h-[580px] transform-gpu"
                                    priority={true}
                                    quality={90}
                                    placeholder="blur"
                                    style={{
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                        {/* bubbles */}
                        <div className="bubles">

                            <motion.div className="absolute bottom-[20%] right-[20%] z-[10]"
                                initial={{ opacity: 0, scale: 0.2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
                            >
                                <Image src={BallImg1} alt="Small Ball" width={130} height={0} priority />
                            </motion.div>
                            <motion.div className="absolute top-[40%] right-[-20px] z-[1000]">
                                <Image src={BallImg1} alt="Small Ball" width={60} height={0} priority />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
