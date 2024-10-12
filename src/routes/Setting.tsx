import React from 'react'

const Setting = () => {
    return (
        <>
            <div className='flex flex-col items-center w-[100vw] h-[92vh]'>
                <span>우리의 커플을 소개합니다!</span>
                <div className='flex justify-center items-center text-center'>
                    <div className=''>
                        <div className='w-[100px] h-[100px] border-[2px] rounded-full overflow-hidden mt-[10px]'>
                            <img src='../profile1.jpeg' className='w-full h-full object-cover rounded-full'></img>
                        </div>
                        <span>최재용</span>
                    </div>
                    <span className='mr-[20px] ml-[20px]'>❤️</span>
                    <div>
                        <div className='w-[100px] h-[100px] border-[2px] rounded-full overflow-hidden mt-[10px]'>
                            <img src='../profile2.jpeg' className='w-full h-full object-cover rounded-full'></img>
                        </div>
                        <span>최재용</span>
                    </div>
                </div>
                <div>
                    <span>방문했던 음식점</span>
                </div>
                <div>
                    프로필 수정하기
                </div>
                <div>
                    ㅊ
                </div>
            </div>
        </>
    )
}

export default Setting
