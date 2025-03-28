/**
 * BlogDetail 컴포넌트
 * 블로그 포스트의 상세 내용을 표시하는 컴포넌트입니다.
 * 포스트의 전체 내용, 메타 정보, 태그, 그리고 관련 포스트 목록을 포함합니다.
 */

import React from 'react';
import { Calendar, Tag, ArrowLeft, Clock } from 'lucide-react';
import { BlogPost } from '../types/blog';

// BlogDetail 컴포넌트의 props 타입 정의
interface BlogDetailProps {
  post: BlogPost;    // 표시할 블로그 포스트 데이터
  onBack: () => void;  // 목록으로 돌아가기 버튼 클릭 시 실행될 콜백 함수
  relatedPosts: BlogPost[];  // 관련 포스트 목록
}

export default function BlogDetail({ post, onBack, relatedPosts }: BlogDetailProps) {
  return (
    <div className="space-y-8">
      {/* 뒤로 가기 버튼 */}
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-700"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        목록으로 돌아가기
      </button>

      {/* 메인 포스트 내용 */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 포스트 헤더 이미지 */}
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-72 object-cover"
        />
        
        <div className="p-8">
          {/* 메타 정보 (날짜, 소요 시간, 작성자) */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>4분 소요</span>
            </div>
            <span className="text-gray-500">{post.author}</span>
          </div>

          {/* 포스트 제목 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          {/* 태그 목록 */}
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 포스트 본문 */}
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {post.content}
            </p>
            
            {/* 주요 내용 요약 */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              주요 내용
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>리액트 컴포넌트 구조 설계</li>
              <li>상태 관리 전략</li>
              <li>성능 최적화 기법</li>
              <li>배포 프로세스</li>
            </ul>
          </div>
        </div>
      </article>

      {/* 관련 포스트 섹션 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">관련 포스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((relatedPost) => (
            <div 
              key={relatedPost.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {relatedPost.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {relatedPost.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-600">{relatedPost.author}</span>
                <time className="text-gray-500">{relatedPost.date}</time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}