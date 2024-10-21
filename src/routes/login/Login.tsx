import React from 'react'
import LoginButton from '../../components/LoginButton'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_RESTAPI;
    const GOOGLE_CLIENTID = import.meta.env.VIIE_GOOGLE_CLIENTID;
    const REDIRECT_URL = "http://localhost:5173/login/auth";
    const KAKAO = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
    const GOOGLE = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENTID}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=openid email profile&access_type=offline`;

    const navigate = useNavigate()

    const onClickHandler = (url: string) => {
        navigate("" + url);
    }

    const KaKaoLogin = () => {
        window.location.href = KAKAO
    }

    const GoogleLogin = () => {
        window.location.href = GOOGLE
    }

    return (
        <div className='w-[100vw] h-[92vh] flex flex-col'>
            <img src='https://img.freepik.com/free-photo/silhouette-couple-love-being-affectionate_23-2150984247.jpg' className='w-[100vw] '></img>
            <div className='flex w-[100vw] flex-col justify-center items-center'>
                <LoginButton img='../googleLogo.png' title='구글 아이디로 로그인' onClick={GoogleLogin} />
                <LoginButton img='../kakaoLogo.svg' title='카카오 아이디로 로그인' onClick={KaKaoLogin} />
                <LoginButton img='../naverLogo.png' title='네이버 아이디로 로그인' />
            </div>
            <div className='flex w-[80vw] self-center justify-around mt-[10px]'>
                <div className='text-[#f844da] underline' onClick={() => onClickHandler("register")}>다른 이메일로 로그인</div>
            </div>
        </div >
    )
}

export default Login
