/**
 * BlogCard 컴포넌트
 * 블로그 포스트의 카드 형태의 미리보기를 표시하는 컴포넌트입니다.
 * 이미지, 제목, 날짜, 작성자, 태그 등의 정보를 포함합니다.
 */

import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';

// BlogCard 컴포넌트의 props 타입 정의
interface BlogCardProps {
  post: BlogPost;    // 표시할 블로그 포스트 데이터
  onClick: () => void;  // 카드 클릭 시 실행될 콜백 함수
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      {/* 블로그 포스트 썸네일 이미지 */}
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {/* 메타 정보 (날짜, 작성자) */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4" />
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        {/* 포스트 제목과 요약 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        {/* 태그 목록 */}
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-indigo-600" />
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}