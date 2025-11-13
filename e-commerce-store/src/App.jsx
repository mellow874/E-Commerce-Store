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
      <div className="flex-1 p-4">
        {/* Navbar component */}
        <Navbar />
        {/* Product listing */}
        <div className="grid grid-cols-4 gap-1">
          <ProductCard />
        </div>
      </div>
      {/* Cart summary component */}
      <div className="w-1/4 p-4 border-l">
        <CartSummary /> 
    </div>
    </div>
  );
}