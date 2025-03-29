/**
 * Register 컴포넌트
 * 사용자 회원가입 폼을 표시하는 컴포넌트입니다.
 * 이메일, 비밀번호, 비밀번호 확인을 입력받아 회원가입을 처리합니다.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface RegisterProps {
  onRegister: (email: string, password: string) => void;
}

export default function Register({ onRegister }: RegisterProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('모든 필드를 입력해주세요.');
      return;
    }
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    onRegister(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
      {/* 배경 이미지 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        {/* 어두운 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg relative z-10 border border-white/10"
      >
        <div>
          <div className="flex justify-center">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Library Web
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            또는{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-white hover:text-gray-200 transition-colors duration-200"
            >
              로그인
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 bg-white/10 text-white placeholder-gray-300"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 bg-white/10 text-white placeholder-gray-300"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 mb-1">
                비밀번호 확인
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 bg-white/10 text-white placeholder-gray-300"
                placeholder="비밀번호를 다시 입력하세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-300 text-sm text-center bg-red-500/10 p-2 rounded-md">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 px-4 border border-white/20 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black/50 transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              회원가입
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 