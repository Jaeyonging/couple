import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { FaMap } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
    const [clickedIcon, setIconClicked] = useState("couple")
    const handleIconClicked = (url: string) => {
        setIconClicked(url)
        navigate("/" + url);
    };

    return (
        <div className='bg-[white] w-[100vw] h-[8vh] fixed items-center justify-between bottom-0 flex flex-row border-t-[1px] text-[30px]'>
            <div className={`w-[25vw] h-full flex justify-center items-center border-r-[1px] ${clickedIcon == "map" ? "bg-[#0000000f]" : "bg-[white]"}`} onClick={() => handleIconClicked('map')}>
                <FaMap />
            </div>
            <div className={`w-[50vw] h-full flex justify-center items-center border-r-[1px] ${clickedIcon == "couple" ? "bg-[#0000000f]" : "bg-[white]"}`} onClick={() => handleIconClicked('couple')}>
                <img src='../couple.png' className='w-[50%] h-[80%] object-contain' />
            </div>
            <div className={`w-[25vw] h-full flex justify-center items-center border-r-[1px] ${clickedIcon == "setting" ? "bg-[#0000000f]" : "bg-[white]"}`} onClick={() => handleIconClicked('setting')}>
                <CgProfile />
            </div>
        </div>
    );
};

export default Footer;
