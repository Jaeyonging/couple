import React, { useEffect, useRef } from 'react'

interface Props {
    longtitude: number
    latitude: number
}

export const NaverMap = ({ longtitude, latitude }: Props) => {
    const mapElement = useRef(null);
    const { naver }: any = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        const location = new naver.maps.LatLng(longtitude, latitude)
        const mapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, [longtitude]);

    return (
        <>
            <div ref={mapElement} style={{ minHeight: '100vh', display: "fixed", zIndex: 0 }} />
        </>
    );
};
