"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const DynamicProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // progress bar for track section
  useEffect(() => {
    if (!isInView) return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 75) {
          clearInterval(interval);
          return 75;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isInView]);

  // toggle heart for track section
  const toggleHeart = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <div className="md:w-[150px] lg:w-[215px] flex justify-between h-5 text-[16px] pb-2 text-amber-300">
        <div>{progress}%</div>
        {/* Heart icon that toggles between bg red and none */}
        <div className="icon">
          {isLiked ? (
            <AiFillHeart
              className="text-2xl cursor-pointer text-red-500"
              onClick={toggleHeart}
            />
          ) : (
            <AiOutlineHeart
              className="text-3xl cursor-pointer "
              onClick={toggleHeart}
            />
          )}
        </div>
      </div>
        {/* progress bar 0-75% */}
      <div ref={ref}
        className="w-[130%] max-w-md mt-[10px] bg-gray-500 rounded-full h-[6px] overflow-hidden relative"
      >
        <div className={`bg-amber-300 absolute right-0 left-auto h-full transition-all duration-200 ease-in-out   `}
          style={{ width: `${progress}%` }}
        >
          
        </div>
      </div>
    </>
  );
};

export default DynamicProgressBar;
