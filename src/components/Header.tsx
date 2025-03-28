/**
 * Header 컴포넌트
 * 웹사이트의 상단 헤더를 표시하는 컴포넌트입니다.
 * 로고와 네비게이션 메뉴를 포함합니다.
 */

import React from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Header 컴포넌트의 props 타입 정의
interface HeaderProps {
  currentPage: string;    // 현재 활성화된 페이지
  onPageChange: (page: string) => void;  // 페이지 변경 시 호출되는 콜백 함수
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({ currentPage, onPageChange, isLoggedIn, onLogout }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* 로고 섹션 */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Library-Web</h1>
          </div>
          {/* 네비게이션 메뉴 */}
          <nav className="flex items-center space-x-6">
            <button 
              onClick={() => onPageChange('home')}
              className={`${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
            >
              홈
            </button>
            <button 
              onClick={() => onPageChange('list')}
              className={`${currentPage === 'list' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
            >
              글 목록
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600`}
            >
              소개
            </button>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">환영합니다!</span>
                <button
                  onClick={onLogout}
                  className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                로그인
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}