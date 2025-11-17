import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartSummary from '../components/CartSummary';

function Home() {
  return (
    <section className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="p-4 sm:p-6 md:p-8">
          <Navbar />
        </div>

        <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <ProductCard />
          </div>
        </main>
      </div>

      <aside className="hidden lg:block w-[320px] border-l border-gray-200 bg-white p-6">
        <CartSummary />
      </aside>
    </section>
  );
}

export default Home;
