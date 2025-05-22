// src/components/PreviewRenderer.tsx
import React, { useContext } from 'react';
import { FitRoomContext } from '../context/FitRoomContext';

const PreviewRenderer: React.FC = () => {
  const { uploadedImage, selectedProduct } = useContext(FitRoomContext);

  if (!uploadedImage || !selectedProduct) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
        <p className="text-gray-500">Upload a photo and select a product to preview</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-auto">
      <img
        src={uploadedImage}
        alt="User Upload"
        className="w-full object-contain rounded"
      />
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="absolute top-0 left-0 w-full h-full object-contain opacity-70 pointer-events-none"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default PreviewRenderer;
