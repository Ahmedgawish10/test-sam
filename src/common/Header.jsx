'use client';

import React from 'react';
import Image from 'next/image';
import Img3 from '@/public/assets/logo.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Dr.Samkari', href: '/about' },
    { label: 'Our App', href: '/ourApp' },
    { label: 'Precedures', href: '/procedures' },
    { label: 'News & updates', href: '/updates' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="header sticky w-full z-[25] bg-[#CDA349] px-10">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex h-16 items-center justify-center  py-[20px]">
            <nav aria-label="Global" className='hidden md:block lg:w-[80%]  '>
              <ul className="flex items-center justify-between gap-4 text-[15px] nav">
                {/* First 3 items */}
                {navItems.slice(0, 3).map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={label}>
                      <Link href={href}>
                        <motion.span
                          whileHover={{ scale: 1.1, opacity: 0.85 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          className={`text-white text-[16px] cursor-pointer inline-block pb-1 ${
                            isActive ? 'border-b-4 border-white rounded-[2px]' : ''
                          }`}
                        >
                          {label}
                        </motion.span>
                      </Link>
                    </li>
                  );
                })}
                {/* Center Logo*/}
                <li>
                  <Link href="/">
                    <Image
                      src={Img3}
                      alt="Logo"
                      width={100}
                      height={100}
                      priority
                     blurDataURL={Img3}
                      className="mx-auto w-full h-full"
                    />
                  </Link>
                </li>
                {/* the last of nav items rest */}
                {navItems.slice(3).map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={label}>
                      <Link href={href}>
                        <motion.span
                          whileHover={{ scale: 1.1, opacity: 0.85 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          className={`text-white text-[16px] cursor-pointer inline-block pb-1 ${
                            isActive ? 'border-b-4 border-white rounded-[2px]' : ''
                          }`}
                        >
                          {label}
                        </motion.span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
