/**
 * Navbar 컴포넌트
 * 웹사이트의 상단 네비게이션 바를 표시하는 컴포넌트입니다.
 * 카테고리 메뉴, 검색, 장바구니 기능을 포함합니다.
 */

import React from 'react';
import { BookOpen, Search, ShoppingBag } from 'lucide-react';

// Navbar 컴포넌트의 props 타입 정의
interface NavbarProps {
  onCategoryChange: (category: string) => void;  // 카테고리 변경 시 실행될 콜백 함수
  selectedCategory: string;  // 현재 선택된 카테고리
}

export default function Navbar({ onCategoryChange, selectedCategory }: NavbarProps) {
  // 도서 카테고리 목록 정의
  const categories = [
    { id: 'all', name: '전체' },
    { id: 'novel', name: '소설' },
    { id: 'essay', name: '에세이' },
    { id: 'computer', name: '컴퓨터' },
    { id: 'business', name: '경영' }
  ];

  return (
    <nav className="bg-[#1d1d1f]/95 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* 로고 */}
          <BookOpen className="h-5 w-5 text-white" />
          
          {/* 카테고리 메뉴 */}
          <div className="flex items-center space-x-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`text-sm ${
                  selectedCategory === category.id 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* 우측 아이콘 (검색, 장바구니) */}
          <div className="flex items-center space-x-6">
            <Search className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
            <ShoppingBag className="h-5 w-5 text-white/80 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}