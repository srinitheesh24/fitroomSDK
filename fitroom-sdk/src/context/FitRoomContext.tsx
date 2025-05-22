import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the context state
interface FitRoomState {
  uploadedImage: string | null;
  selectedProductId: string | null;
  bodyMeasurements: Record<string, number> | null;
  tryOnResult: any;
  setUploadedImage: (img: string | null) => void;
  setSelectedProductId: (id: string | null) => void;
  setBodyMeasurements: (measurements: Record<string, number> | null) => void;
  setTryOnResult: (result: any) => void;
}

// Create context
const FitRoomContext = createContext<FitRoomState | undefined>(undefined);

// Provider component
export const FitRoomProvider = ({ children }: { children: ReactNode }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [bodyMeasurements, setBodyMeasurements] = useState<Record<string, number> | null>(null);
  const [tryOnResult, setTryOnResult] = useState<any>(null);

  return (
    <FitRoomContext.Provider
      value={{
        uploadedImage,
        selectedProductId,
        bodyMeasurements,
        tryOnResult,
        setUploadedImage,
        setSelectedProductId,
        setBodyMeasurements,
        setTryOnResult
      }}
    >
      {children}
    </FitRoomContext.Provider>
  );
};

// Custom hook to use context
export const useFitRoomContext = (): FitRoomState => {
  const context = useContext(FitRoomContext);
  if (!context) {
    throw new Error('useFitRoomContext must be used within a FitRoomProvider');
  }
  return context;
};
