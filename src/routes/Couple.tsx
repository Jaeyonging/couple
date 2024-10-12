import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { calculateCoupleDate } from '../types/types';

export const Couple = () => {
  const [date, setDate] = useState("21.03.30");
  const [todayDate, setTodayDate] = useState<number>();
  const [image1, setImage1] = useState<string | ArrayBuffer | null>('../ironman.png');
  const [image2, setImage2] = useState<string | ArrayBuffer | null>('https://i.namu.wiki/i/_ETAzc6dAPEFin4a5SXNg7om8Oc6D1ogmALu3CxdLA3ZKToN1XcHp4FPSRk62NhHKSfngtOj6KehZQvdvo8wQw.webp');

  useEffect(() => {
    if (date) {
      setTodayDate(calculateCoupleDate(date));
    }
  }, [date]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className='flex w-[100vw] h-[92vh] flex-col justify-center items-center'>
        <div className='flex flex-col text-center'>
          <span>❤️ 연애 시작일 ❤️</span>
          <span className='font-bold text-[18px]'>{date}</span>
          <div>
            <span>당신의 </span>
            <span className='font-bold text-[18px]'>{todayDate}</span>
            <span>일을 축하합니다!</span>
          </div>
        </div>
        <div className='flex justify-around mt-[30px]'>
          {/* First Image with Upload Option */}
          <div className='w-[40vw] h-[40vw] border-[2px] mr-[30px] flex items-center justify-center cursor-pointer' onClick={() => document.getElementById('upload1')?.click()}>
            <img src={image1 as string} className='w-full h-full object-contain' alt="Iron Man" />
          </div>
          {/* Hidden File Input for First Image */}
          <input
            id='upload1'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => handleImageUpload(e, setImage1)}
          />
          {/* Second Image with Upload Option */}
          <div className='w-[40vw] h-[40vw] border-[2px] flex items-center justify-center cursor-pointer' onClick={() => document.getElementById('upload2')?.click()}>
            <img src={image2 as string} className='w-full h-full object-contain' alt="Another Image" />
          </div>
          {/* Hidden File Input for Second Image */}
          <input
            id='upload2'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => handleImageUpload(e, setImage2)}
          />
        </div>
        <div className='mt-[30px] flex flex-col text-center'>
          <span>이제 곧 1300일입니다.</span>
          <span>기념일에 이런 레스토랑 어떠세요?</span>
          <span>오늘은 이런 레스토랑 어떠세요?</span>
        </div>
      </div>
    </>
  );
};
