"use client";
import React, { useRef, useEffect } from "react";
import InputField from "@/src/common/InputField";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { LuEarth } from "react-icons/lu";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrLocation, GrInstagram } from "react-icons/gr";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ContactPage() {
  const LocationData = [
    {
      numberClinic:1,
      title: "Klinik Center مركز كلينك الطبي",
      address1: "Kuwait City, Salmiya, Alkhansaa' St. Block 5",
      address2: "مدينة الكويت، السالمية، شارع الخنساء، بلوك 5",
      phone: "+965 2202 0404",
      instagram: "@klinik.kw",
      email: "Customercare@klinik.com.kw",
      mapLink: "https://maps.app.goo.gl/HEyBo2dJBRRut3FS9",
      instaLink: "https://instagram.com/klinik.kw",
      mailto: "mailto:Customercare@klinik.com.kw",
      tel: "tel:+96522020404",
    },
    {
      numberClinic:2,
      title: "Dr. Samkari Clinic عيادة د. سمكري",
      address1: "Shatt Al-Arab St. Amman 11831",
      address2: "عمان - أم أذينة - ش. شط العرب",
      phone: "+962 7954 99992",
      instagram: ["@drsamkariclinic", "@drsamkari"],
      email: "drsamkariclinics@gmail.com",
      mapLink: "https://maps.app.goo.gl/sUsMMtfeu5VjEnqj9",
      instaLinks: [
        "https://instagram.com/drsamkariclinic",
        "https://instagram.com/drsamkari",
      ],
      mailto: "mailto:drsamkariclinics@gmail.com",
      tel: "tel:+962795499992",
    },
  ];

  const locationRef = useRef(null);
  const isInView = useInView(locationRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  // Func to display location section
  const renderLocationClinic = (location, alignEnd = false) => (
    <div className={` px-2 ${location.numberClinic == 2 ? " text-end md:text-start" : " text-end md:text-end" }   mb-2`}>
      <h2 className={`text-2xl font-bold ${alignEnd ? "text-end" : ""} mb-2`}>
        {location.title}
      </h2>
      {/* location on google map */}
      {[location.address1, location.address2].map((address, i) => (
        <p key={i} className="text-gray-700">
          <a
            href={location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {address}
          </a>
        </p>
      ))}
      {/* phone */}
      <p className="mb-2 text-gray-700">
        <a href={location.tel} className="hover:underline">
          {location.phone}
        </a>
      </p>
      {/* insta */}
      {Array.isArray(location.instagram) ? (
        <div className="text-gray-700  justify-end md:justify-start  flex flex-wrap gap-4 mb-2">
          {location.instagram.map((insta, i) => (
            <a
              key={i}
              href={location.instaLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {insta}00
            </a>
          ))}
        </div>
      ) : (
        <p className="mb-2 text-gray-700">
          <a
            href={location.instaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {location.instagram}
          </a>
        </p>
      )}
      {/* email */}
      <p className="text-base text-gray-700">
        <a href={location.mailto} className="hover:underline">
          {location.email}
        </a>
      </p>
    </div>
  );

  return (
    <main className="pt-[50px]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* form contact section */}
        <div className="p-8 rounded-lg max-w-xl">
          <h2 className="text-4xl font-bold text-center mb-6">Get in touch with us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField placeholder="First Name" icon={FaRegUser} required />
              <InputField placeholder="Last Name" required />
            </div>
            <InputField type="email" placeholder="Email" icon={AiOutlineMail} required />
            <div className="relative">
              <select
                className="w-full ps-10 text-[17px] pe-5 pt-[26px] pb-4 border-2 border-gray-600 rounded-md outline-none block"
                required
              >
                <option value="">Your country</option>
                <option value="EG">Egypt</option>
                <option value="SA">Saudi Arabia</option>
                <option value="AE">UAE</option>
              </select>
              <div className="absolute left-2 top-[40%]">
                <LuEarth className="text-[24px] text-gray-600" />
              </div>
            </div>
            <InputField type="tel" placeholder="Phone number" icon={IoIosPhonePortrait} required />
            <InputField
              as="textarea"
              type="textarea"
              placeholder="Your message"
              className="!h-32 pt-5 ps-5 w-full border-2 border-gray-600 outline-none rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#cda349] hover:bg-orange-500 text-white font-semibold py-4 rounded-md transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
        {/* location section  */}
        <motion.div
          ref={locationRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="px-6 py-10 text-gray-800"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-[1fr_50px_1fr] text-lg">
            {renderLocationClinic(LocationData[0], true)}
            {/* Icons */}
            <div className="pt-[45px]  hidden md:flex flex-col items-center">
              <p>
                <GrLocation className="text-2xl" />
              </p>
              <p className="pt-[28px]">
                <IoIosPhonePortrait className="text-3xl" />
              </p>
              <p className="pt-[12px]">
                <GrInstagram className="text-xl" />
              </p>
              <p className="pt-[12px]">
                <AiOutlineMail className="text-2xl" />
              </p>
            </div>
            {renderLocationClinic(LocationData[1])}
          </div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
            }}
            className="about-footer max-w-xxl lg:px-15 pt-15 text-gray-700 text-center"
          >
            Unlock a ready-made, fully functional app designed by a top plastic surgeon to simplify
            clinic management, enhance patient experience, and boost retention. From smart bookings to
            loyalty rewards, this code is plug-and-play — built with real clinic needs in mind.
            Invest once, and turn complexity into clarity for any aesthetic business. Scalable. Elegant.
            Proven.
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}
