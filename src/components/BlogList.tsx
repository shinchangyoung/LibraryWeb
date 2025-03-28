/**
 * BlogList 컴포넌트
 * 블로그 포스트들의 목록을 표시하는 컴포넌트입니다.
 * 각 포스트는 이미지, 제목, 날짜, 소요 시간, 태그, 작성자 정보를 포함합니다.
 */

import React from 'react';
import { Calendar, Tag, Clock } from 'lucide-react';
import { BlogPost } from '../types/blog';

// BlogList 컴포넌트의 props 타입 정의
interface BlogListProps {
  posts: BlogPost[];    // 표시할 블로그 포스트 배열
  onPostClick: (post: BlogPost) => void;  // 포스트 클릭 시 실행될 콜백 함수
}

export default function BlogList({ posts, onPostClick }: BlogListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article 
          key={post.id} 
          className="bg-white rounded-lg shadow-md p-6 flex gap-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onPostClick(post)}
        >
          {/* 포스트 썸네일 이미지 */}
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-48 h-32 object-cover rounded-md flex-shrink-0"
          />
          <div className="flex-1">
            {/* 메타 정보 (날짜, 소요 시간) */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>4분 소요</span>
              </div>
            </div>
            {/* 포스트 제목과 요약 */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
            {/* 태그 목록과 작성자 정보 */}
            <div className="flex items-center justify-between">
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
              <span className="text-sm text-gray-500">{post.author}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}