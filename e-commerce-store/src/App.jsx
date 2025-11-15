import react from 'react';
import CartSummary from './components/CartSummary';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';

export default function App() {
  return(
    <div className="flex bg-gray-200">
      {/* Sidebar component */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 p-4 ">
        {/* Navbar component */}
        <div className="flex justify-center mb-2.5">
          <Navbar />
        </div>
        {/* Product listing */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          <ProductCard />
        </div>
      </div>
      {/* Cart summary component */}
      <div className="border-l-2 border-gray-300 gap-4 p-4 top-[51px] sm:invisible md:visible lg:visible">
        <div className="w-[250px] h-10 ">
        <CartSummary /> 
    </div>
      </div>
      
    </div>
  );
}