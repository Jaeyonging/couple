import React, { useState } from 'react'
import { NaverMap } from '../components/NaverMap'

const Map = () => {
    const [longtitude, setLongtitude] = useState(37.5532054)
    const [latitude, setLatitude] = useState(127.0107185)
    return (
        <>
            <NaverMap longtitude={longtitude} latitude={latitude} />
            <div className='h-[50vh] w-[100vw] flex bg-[white]'>
                hi
            </div>
        </>
    )
}

export default Map
