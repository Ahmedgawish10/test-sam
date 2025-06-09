'use client';

import React from 'react';

export default function InputField({ type = 'text', placeholder, icon: Icon, as = 'input', ...props }) {
  const Tag = as;
  
  return (
    <div className="relative">
      <Tag
        type={type}
        placeholder={placeholder}
        className="w-full ps-10 text-[17px] pe-5 pt-[26px] pb-4 border-2 border-gray-600 rounded-md outline-none block"
        {...props}//class or any values will send 
      />
      {Icon && (
        <div className="absolute left-2 top-[40%]">
          <Icon className="text-[24px] text-gray-600" />
        </div>
      )}
    </div>
  );
}
