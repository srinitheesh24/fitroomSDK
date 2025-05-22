// src/components/FitRoomWidget.tsx
import React from 'react';
import ImageUploader from './ImageUploader';
import ProductSelector from './ProductSelector';
import PreviewRenderer from './PreviewRenderer';
import { FitRoomProvider } from '../context/FitRoomContext';
import Loader from './common/Loader';

const FitRoomWidget: React.FC = () => {
  return (
    <FitRoomProvider>
      <div className="fitroom-widget-container p-4 bg-white rounded shadow-md max-w-md mx-auto font-sans">
        <h2 className="text-xl font-bold mb-4 text-center">👗 Try with FitRoom</h2>
        
        <ImageUploader />
        <ProductSelector />
        <PreviewRenderer />
        
        <Loader />
      </div>
    </FitRoomProvider>
  );
};

export default FitRoomWidget;
