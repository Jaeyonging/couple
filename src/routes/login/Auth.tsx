import React, { useEffect } from 'react'

const Auth = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    useEffect(() => {
        console.log(code)
    }, [])

    return (
        <div>
            잠시만 기다려주세요
        </div>
    )
}

export default Auth
