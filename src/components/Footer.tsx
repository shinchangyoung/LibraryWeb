/**
 * Footer 컴포넌트
 * 웹사이트의 하단 푸터를 표시하는 컴포넌트입니다.
 * 저작권 정보와 주요 링크들을 포함합니다.
 */

import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-12">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="border-t border-gray-300 pt-8">
          {/* 로고와 주요 링크 */}
          <div className="flex items-center justify-between mb-8">
            <BookOpen className="h-6 w-6 text-gray-500" />
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-800">개인정보 처리방침</a>
              <a href="#" className="hover:text-gray-800">이용약관</a>
              <a href="#" className="hover:text-gray-800">고객센터</a>
              <a href="#" className="hover:text-gray-800">매장 안내</a>
            </div>
          </div>
          {/* 저작권 정보 */}
          <p className="text-sm text-gray-500 text-center">
            Copyright © 2024 북스토어. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
}