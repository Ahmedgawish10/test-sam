"use client"
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";
import BlurImg1 from "@/public/assets/blur-ball-hero1.png";
import Image from "next/image";
import BallImg1 from "@/public/assets/ball1-hero.png";
import ProcedureImg5 from "@/public/assets/news/new5.png";
import OverLayImg from "@/public/assets/news/news-overlay.svg";
import FaceBookIcon from "@/public/assets/news/facebook.svg";
import InstaIcon from "@/public/assets/news/insta.svg";
import TwitterIcon from "@/public/assets/news/twitter.svg";

// Skeleton Component for News Item
const NewsItemSkeleton = () => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
    {/* Image Skeleton */}
    <div className="relative h-64 md:h-80 bg-gray-300">
      {/* Author info skeleton */}
      <div className="absolute left-[2%] top-[10px] z-[50]">
        <div className="h-5 bg-gray-400 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-24"></div>
      </div>
    </div>

    {/* Content Skeleton */}
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-4">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

export default function NewsDisplay() {
  const [openIndex, setOpenIndex] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/news');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('News data:', data);

        // Assuming the API returns data in format: { data: [...] }
        setNewsData(data.data || data);
        setError(null);
      } catch (err) {
        console.log('Error fetching news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (error && newsData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Error loading news: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-2 px-4">
      <div className="container mx-auto text-[30px]">

        {/* News Items */}
        <div className="content pb-[75px] md:w-[90%] lg:w-[75%] mx-auto pt-[200px]">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="relative mb-8">
                {/* Decorative elements for first and last skeleton items */}
                {index === 0 && (
                  <div className="absolute left-[-33%] bottom-[-0px] z-[40]">
                    <Image
                      src={BlurImg1}
                      alt="Blurred Ball"
                      className="filter blur-sm opacity-[0.5]"
                      width={250}
                      height={0}
                      priority
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute left-[-33%] bottom-[-0px] z-[40]">
                    <Image
                      src={BlurImg1}
                      alt="Blurred Ball"
                      className="filter blur-sm opacity-[0.5]"
                      width={250}
                      height={0}
                      priority
                    />
                  </div>
                )}
                <NewsItemSkeleton />
              </div>
            ))
          ) : (
            newsData.map((item, index) => (
              <div key={item.id} className="relative mb-8">
                {/* Decorative elements for first and last items */}

                {index === newsData.length - 1 && (
                  <div className="absolute left-[-33%] bottom-[-0px] z-[40]">
                    <Image
                      src={BlurImg1}
                      alt="Blurred Ball"
                      className="filter blur-sm opacity-[0.5]"
                      width={250}
                      height={0}
                      priority
                    />
                  </div>
                )}

                <div className="bg-white rounded-3xl shadow-lg overfldow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-80 overfldow-hidden">
                    {index === 0 && (
                      <div className="absolute left-[-33%] bottom-[-0px] z-[40]">
                        <Image
                          src={BlurImg1}
                          alt="Blurred Ball"
                          className="filter blur-sm opacity-[0.5]"
                          width={250}
                          height={0}
                          priority
                        />
                      </div>
                    )}
                    {index === 0 && (
                      <div className="absolute right-[-18%] top-[-60px] z-[40]">
                        <Image
                          src={BlurImg1}
                          alt="Blurred Ball"
                          className=" filter blur-[2px] opacity-[0.9]"
                          width={80}
                          height={0}
                          priority
                        />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="absolute right-[-40%] top-[55px] z-[40]">
                        <Image
                          src={BlurImg1}
                          alt="Blurred Ball"
                          className=" filter blur-[2px] opacity-[0.9]"
                          width={250}
                          height={0}
                          priority
                        />
                      </div>
                    )}




                    <img
                      src={"http://127.0.0.1:8000/assets/images/news/" + item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-[25px]"
                    />

                    <div className="absolute flex flex-col text-white left-[2%] top-[10px] z-[50]">
                      <span className="text-[#f7e8e8] text-[20px] text-left">Dr.Zaid Samkari</span>
                      <span className="text-[#f7e8e8] text-[15px] text-left">{item.date || item.created_at || "Recently"}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  {(item.content || item.description) && (
                    <div className="p-0">
                      <button
                        onClick={() => toggle(index)}
                        className={`w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors ${openIndex === index ? '' : 'rounded-b-3xl'
                          }`}
                      >
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 pr-4">
                          {item.title}
                        </h2>
                        <IoIosArrowDown
                          className={`w-8 h-8 text-gray-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      <div
                        className={`px-8 bg-white transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 pb-8 rounded-b-3xl ' : 'max-h-0 '
                          }`}
                      >
                        <div className="border-t border-gray-100 pt-6">
                          <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            {item.content || item.description}
                          </p>
                          {item.additionalContent && (
                            <p className="text-lg text-gray-700 leading-relaxed">
                              {item.additionalContent}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          <div className="relative w-full h-full">
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
            <div className="z-[40]">
              <Image
                src={ProcedureImg5}
                alt="Blurred Ball"
                className="w-full rounded-t-[35px]"
                width={250}
                height={0}
                priority
              />
            </div>
            <div className="absolute flex flex-col text-white left-[2%] top-[10px] z-[50]">
              <span className="text-[#f7e8e8] text-[25px] text-left">Dr.Zaid Samkari</span>
              <span className="text-[#f7e8e8] text-[17px] text-left">2 weeks ago</span>
            </div>
            <div className="social absolute w-full flex justify-center gap-13 pt-[20px]">
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


        <div className="footer-news relative text-center pt-20 text-gray-600">
          <span>
            Unlock a ready-made, fully functional app designed by a top plastic
            surgeon to simplify clinic management, enhance patient experience, and
            boost retention. From smart bookings to loyalty rewards, this code is
            plug-and-play — built with real clinic needs in mind. Invest once, and
            turn complexity into clarity for any aesthetic business. Scalable.
            Elegant. Proven.


          </span>

          <div className="absolute right-[-4%] bottom-[90%] z-[40]">
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

      </div>



    </div>
  );
}