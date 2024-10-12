import React, { useEffect, useState } from 'react'
import { NaverMap } from '../components/NaverMap'
import { FaAngleDoubleUp } from 'react-icons/fa';

const Map = () => {
    const [longtitude, setLongtitude] = useState(37.5532054)
    const [latitude, setLatitude] = useState(127.0107185)
    const [isPopupOpen, setPopUpOpen] = useState(true)

    const handleMapClick = () => {
        setPopUpOpen(!isPopupOpen);
    };

    useEffect(() => {
        if (!isPopupOpen) {
            // 팝업이 닫혔을 때 스크롤 방지
            document.body.style.overflow = 'hidden';
        } else {
            // 팝업이 열렸을 때 스크롤 허용
            document.body.style.overflow = 'auto';
        }

        // Cleanup 함수
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isPopupOpen]);

    return (
        <>
            <div onClick={handleMapClick}>
                <NaverMap longtitude={longtitude} latitude={latitude} />
            </div>
            <div
                className={`h-[40vh] w-[100vw] absolute rounded-[50px] p-4 bottom-0 flex bg-[white] transition-transform duration-500 ease-in-out ${isPopupOpen ? 'translate-y-0' : 'translate-y-[40vh]'
                    }`}
            >
                레스토랑 1
            </div>
            {!isPopupOpen && <div className="absolute bottom-[8vh] left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-in-out animate-bounce" onClick={handleMapClick}>
                <FaAngleDoubleUp size={50}
                />
            </div>}
        </>
    );
};

export default Map;
