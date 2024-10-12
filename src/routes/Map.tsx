import React, { useState } from 'react'
import { NaverMap } from '../components/NaverMap'
import { FaAngleDoubleUp } from "react-icons/fa";

const Map = () => {
    const [longtitude, setLongtitude] = useState(37.5532054)
    const [latitude, setLatitude] = useState(127.0107185)
    return (
        <>
            <NaverMap longtitude={longtitude} latitude={latitude} />
            <div className='h-[40vh] w-[100vw] absolute rounded-[50px] p-4 bottom-0 flex bg-[white]'>
                hi
            </div>
        </>
    )
}

export default Map
