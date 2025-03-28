/**
 * ProductHero 컴포넌트
 * 상품 페이지의 히어로 섹션을 표시하는 컴포넌트입니다.
 * 배경 이미지와 함께 메인 타이틀, 서브타이틀, CTA 버튼을 포함합니다.
 * Framer Motion을 사용하여 애니메이션 효과가 적용됩니다.
 */

import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHero() {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* 배경 이미지 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="relative h-full flex flex-col items-center justify-center text-center">
        {/* 메인 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          독서의 즐거움
        </motion.h1>
        {/* 서브타이틀 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl mb-8"
        >
          당신의 지식을 넓혀줄 새로운 이야기
        </motion.p>
        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/90"
        >
          베스트셀러 보기
        </motion.button>
      </div>
    </div>
  );
}