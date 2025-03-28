import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Navbar onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory} />
      
      <main>
        <ProductHero />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[980px] mx-auto px-4 py-16"
        >
          <ProductGrid products={filteredProducts} />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;