'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import ImgIphone from '@/public/assets/iphone3.png';
import Img2 from '@/public/assets/ball1-hero.png';
import ImgShadowIphone from '@/public/assets/shadow-iphone.png';

const ballConfigs = [
    { left: '10%', blur: 'blur-[3px]',opacity:'opacity-[0.7]', bubbleMoveX: "330px", bubbleMoveXSmall: "150px", bubbleMoveY: "-200px", bubbleMoveYSmall: "-100px", top: '0%', width: 100, widthSmall: 50, delay: 0.4 },
    { left: '60%',blur: 'blur-[3px]',opacity:'opacity-[0.9]', bubbleMoveX: "-230px", bubbleMoveXSmall: "-100px", bubbleMoveY: "-200px", bubbleMoveYSmall: "-100px", top: '15%', width: 90, widthSmall: 45, delay: 0.4 },
    { left: '70%', bubbleMoveX: "-400px", bubbleMoveXSmall: "-200px", bubbleMoveY: "20px", bubbleMoveYSmall: "10px", bottom: '55%', width: 60, widthSmall: 30, delay: 0.4 },
    { left: '65%', bubbleMoveX: "-200px", bubbleMoveXSmall: "-100px", bubbleMoveY: "1px", bubbleMoveYSmall: "0px", bottom: '60%', width: 50, widthSmall: 25, delay: 0.4 },
    { left: '70%', bubbleMoveX: "500px", bubbleMoveXSmall: "250px", bubbleMoveY: "-10px", bubbleMoveYSmall: "-5px", bottom: '40%', width: 100, widthSmall: 50, delay: 0.4 },
    { left: '56%', bubbleMoveX: "300px", bubbleMoveXSmall: "150px", bubbleMoveY: "100%", bubbleMoveYSmall: "50%", bottom: '25%', width: 50, widthSmall: 25, delay: 0.4 },
    { left: '26%', bubbleMoveX: "180px", bubbleMoveXSmall: "90px", bubbleMoveY: "120px", bubbleMoveYSmall: "60px", bottom: '25%', width: 110, widthSmall: 55, delay: 0.4 },
    { left: '18%', bubbleMoveX: "-300px", bubbleMoveXSmall: "-150px", bubbleMoveY: "200px", bubbleMoveYSmall: "100px", bottom: '35%', width: 40, widthSmall: 20, delay: 0.4 },
    { left: '24%', bubbleMoveX: "-100px", bubbleMoveXSmall: "-50px", bubbleMoveY: "80px", bubbleMoveYSmall: "40px", bottom: '55%', width: 110, widthSmall: 55, delay: 0.4 },
    { left: '18%', bubbleMoveX: "500px", bubbleMoveXSmall: "250px", bubbleMoveY: "150px", bubbleMoveYSmall: "75px", bottom: '75%', width: 60, widthSmall: 30, delay: 0.4 },
]

function NotifiedSection() {
    const [animateEnd, setAnimateEnd] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    // check screen size on moble or on xl screen for bubble width responsive..
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    //  animation for text get notified
    const getNotifiedTextVariants = {
        animate: {
            x: [0, -800],
            transition: {
                x: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            },
        },
    };
    return (
        <div className="notifiedsection relative overflow-hidden">
            {/* Get Notified Title text  */}
            <motion.div className="notified-text-box absolute top-[50%] whitespace-nowrap"
                animate="animate"
                variants={getNotifiedTextVariants}
            >
                <h1 className="text-[42px] font-bold uppercase">
                    {Array.from({ length: 100 }).map((_, inedx) => (
                        <span key={inedx} >Get Notified </span>
                    ))}
                </h1>
            </motion.div>
            
             {/* notifiedsection content (mobile and bubbles) */}
            <div className="pt-[300px] pb-[10px] container mx-auto">
                <div className="w-[90%] mx-auto">
                    <div className="relative w-full h-[700px] flex justify-center items-center">
                        {/*  Bubbles */}
                        <div className="yyyyy relative w-[112px] h-[150px]">
                            {ballConfigs.map((cfg, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute z-0`}
                                    initial={{ scale: 1, opacity: 1 }}
                                    whileInView={{
                                        scale: 1.5,
                                        opacity: 1,
                                        x: isSmallScreen ? cfg.bubbleMoveXSmall : cfg.bubbleMoveX,
                                        y: isSmallScreen ? cfg.bubbleMoveYSmall : cfg.bubbleMoveY,
                                    }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                        duration: 0.9,
                                        ease: 'easeInOut',
                                        delay: cfg.delay,
                                    }}
                                >
                                    <Image
                                        src={Img2}
                                        alt="Bubble"
                                        width={isSmallScreen ? cfg.widthSmall : cfg.width}
                                        height={isSmallScreen ? cfg.widthSmall : cfg.width}
                                        className={`object-contain filter ${cfg?.blur} ${cfg?.opacity}  `}
                                    />
                                </motion.div>
                            ))}
                        </div>
                        {/*  Phone on Top */}
                        <motion.div
                            className="absolute top-[0px] z-5  w-[300px]  md:w-[600px] h-[700px] transform rotate-(-20deg)"
                            whileInView={{
                                x: ["-5px", "5px", "-5px", "5px", "-5px"],
                                rotate: ["-2deg", "2deg", "-2deg", "2deg", "0deg"],
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: 1,
                                ease: "easeInOut",
                            }}
                            onAnimationComplete={() => setAnimateEnd(true)}
                            style={{
                                opacity: animateEnd ? 1 : 1,
                                rotate: animateEnd ? '-200deg' : "0deg",
                            }}
                        >
                            <Image
                                src={ImgIphone}
                                alt="Phone"
                                width={600}
                                height={20}
                                className="object-contain w-full h-[580px]"
                            />
                        </motion.div>
                        {/* Shadow1 of phone*/}
                        <motion.div
                            className="absolute top-[-20px] z-1 w-[600px] h-[700px] transform"
                            whileInView={{
                                x: ["5px", "5px", "-15px", "5px", "-5px"],
                                rotate: ["-5deg", "5deg", "-10deg", "10deg", "-2deg"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: 1,
                                ease: "easeInOut",
                                delay: 0.2,
                            }}
                            onAnimationComplete={() => setAnimateEnd(true)}
                            style={{
                                opacity: animateEnd ? 0 : 1,
                                rotate: animateEnd ? '0deg' : undefined,
                            }}
                        >
                            <Image
                                src={ImgShadowIphone}
                                alt="Phone Shadow"
                                width={600}
                                height={20}
                                className="object-contain w-full h-[650px]"
                            />
                        </motion.div>
                        {/* Shadow2 of phone*/}
                        <motion.div
                            className="absolute top-[-20px] z-1 w-[600px] h-[700px] transform"
                            whileInView={{
                                x: ["-5px", "5px", "-5px", "5px", "-5px"],
                                rotate: ["20deg", "5deg", "-10deg", "10deg", "8deg"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: 1,
                                ease: "easeInOut",
                                delay: 0.4,
                            }}
                            onAnimationComplete={() => setAnimateEnd(true)}
                            style={{
                                opacity: animateEnd ? 0 : 1,
                                rotate: animateEnd ? '0deg' : undefined,
                            }}
                        >
                            <Image
                                src={ImgShadowIphone}
                                alt="Phone Shadow"
                                width={600}
                                height={20}
                                className="object-contain w-full h-[650px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotifiedSection;