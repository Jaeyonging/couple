import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // 로그인 로직 구현 (서버와 통신 등)
        console.log('Logging in with:', { email, password });
        // 로그인 성공 시 페이지 이동
        // navigate("/dashboard"); 같은 로그인 성공 후 리디렉션할 경로로 이동
    };

    const goToRegister = () => {
        navigate('/login/register');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">로그인</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">이메일</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                        로그인
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        아직 계정이 없으신가요?{' '}
                        <button
                            onClick={goToRegister}
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            회원가입
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Email;
