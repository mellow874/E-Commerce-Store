import react from 'react';
import CartSummary from './components/CartSummary';
import Sidebar from './components/Sidebar';
import BagItemscard1 from './components/BagItemscard1';
import BagItemscard2 from './components/BagItemscard2';
import BagItemscard3 from './components/BagItemscard3';


export default function App() {
  return(
    <div className="flex bg-gray-200">
      {/* Sidebar component */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex flex-col p-4 gap-6">
          {/* Bag Items Card 1 */}
          <BagItemscard1/>

         {/* Bag Items Card 2 */}
          <BagItemscard2/>

       {/* Bag Items Card 3 */}
          <BagItemscard3/>
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