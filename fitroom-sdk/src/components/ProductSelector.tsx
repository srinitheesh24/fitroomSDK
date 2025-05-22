// src/components/ProductSelector.tsx
import React, { useContext } from 'react';
import { FitRoomContext } from '../context/FitRoomContext';
import { Product } from '../types';
import mockProducts from '../data/mockProducts';

const ProductSelector: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useContext(FitRoomContext);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Select a Product</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className={`border rounded p-2 cursor-pointer ${
              selectedProduct?.id === product.id
                ? 'border-blue-500'
                : 'border-gray-300'
            }`}
            onClick={() => handleProductSelect(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <p className="text-xs mt-1 text-center">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelector;
