import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getNaverUser } from '../../api';

const Auth = () => {
    const navigate = useNavigate()
    const code = new URL(window.location.href).searchParams.get("code");
    useEffect(() => {
        if (code) {
            getNaverUser(code).then((msg) => {
                console.log(msg)
            }
            )
        }
        // console.log(code)
        // if (code) {
        //     setTimeout(() => {
        //         navigate("../couple")
        //     }, 1000);
        // }
    }, [])

    return (
        <div>
            {code ? <div>인증완료되었습니다.</div> :
                <div>
                    잠시만 기다려주세요
                </div>}
        </div>
    )
}

export default Auth
