/**
 * ProductGrid 컴포넌트
 * 상품 목록을 그리드 형태로 표시하는 컴포넌트입니다.
 * 각 상품은 이미지, 이름, 설명, 가격 정보를 포함하며 애니메이션 효과가 적용됩니다.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types/product';

// ProductGrid 컴포넌트의 props 타입 정의
interface ProductGridProps {
  products: Product[];  // 표시할 상품 목록
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* 상품 이미지 */}
          <div className="relative h-64">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* 상품 정보 */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {/* 가격과 구매 버튼 */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">₩{product.price.toLocaleString()}</span>
              <button className="bg-[#1d1d1f] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1d1d1f]/90">
                구매하기
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}