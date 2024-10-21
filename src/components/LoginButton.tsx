import React from 'react'

interface Props {
    img: string
    title: string
    onClick?: () => void
}

const LoginButton = ({ img, title, onClick }: Props) => {
    return (
        <div className={`w-[80vw] flex rounded-[10px] items-center justify-start border-[1px] mb-[10px] mt-[10px]`} onClick={onClick}>
            <img src={img} className='w-[50px] ml-[20px] p-2' />
            <div className='text-[20px] ml-[20px]'>
                {title}
            </div>
        </div>
    )
}

export default LoginButton
