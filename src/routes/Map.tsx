import React, { useEffect, useState } from 'react';
import { NaverMap } from '../components/NaverMap';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Map = () => {
    const [longtitude, setLongtitude] = useState(37.5532054);
    const [latitude, setLatitude] = useState(127.0107185);
    const [isPopupOpen, setPopUpOpen] = useState(true);
    const [searchText, setSearchText] = useState('');

    const handleMapClick = () => {
        setPopUpOpen(!isPopupOpen);
    };

    const handleSearch = () => {
        console.log(searchText);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const searchIconClick = () => {
        handleSearch();
    };

    useEffect(() => {

    }, []);

    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='absolute top-0 w-[100vw] h-[8vh] flex justify-center items-center bg-[white] p-2'>
                <input
                    className='border-[3px] w-[85vw] p-2 items-center justify-center flex border-[red]'
                    placeholder='레스토랑 검색'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <CiSearch className='text-[30px] cursor-pointer' onClick={searchIconClick} />
            </div>
            <div onClick={handleMapClick} className='mt-[8vh]'>
                <NaverMap longtitude={longtitude} latitude={latitude} />
            </div>
            <div
                className={`h-[40vh] w-[100vw] absolute rounded-[50px] p-4 bottom-0 flex bg-[white] transition-transform duration-500 ease-in-out ${isPopupOpen ? 'translate-y-0' : 'translate-y-[40vh] h-0'
                    }`}
            >
                등록된 레스토랑
            </div>
            {!isPopupOpen && (
                <div
                    className="absolute bottom-[8vh] left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-in-out animate-bounce"
                    onClick={handleMapClick}
                >
                    <FaAngleDoubleUp size={50} />
                </div>
            )}
        </div>
    );
};

export default Map;
