import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import ProductGrid from './components/ProductGrid';
import ProductHero from './components/ProductHero';
import Login from './components/Login';
import Register from './components/Register';
import { BlogPost } from './types/blog';
import { Product } from './types/product';
import { posts } from './data/posts';
import { products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // 실제 로그인 로직은 여기에 구현
    console.log('로그인 시도:', email, password);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // 실제 회원가입 로직은 여기에 구현
    console.log('회원가입 시도:', name, email, password);
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const relatedPosts = posts.filter(post => post.id !== selectedPost?.id).slice(0, 2);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={
              isLoggedIn ? <Navigate to="/" /> : 
              <Login onLogin={handleLogin} />
            } />
            <Route path="/register" element={
              isLoggedIn ? <Navigate to="/" /> : 
              <Register onRegister={handleRegister} />
            } />
            <Route path="/" element={
              <>
                <ProductHero />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <ProductGrid products={products} />
                </div>
              </>
            } />
            <Route path="/blog" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BlogList posts={posts} onPostClick={handlePostClick} />
              </div>
            } />
            <Route path="/blog/:id" element={
              selectedPost ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <BlogDetail
                    post={selectedPost}
                    onBack={handleBack}
                    relatedPosts={relatedPosts}
                  />
                </div>
              ) : (
                <Navigate to="/blog" />
              )
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;