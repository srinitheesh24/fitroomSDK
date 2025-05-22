// src/index.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import FitRoomWidget from './components/FitRoomWidget';
import './styles/global.css';

// Mount function to embed widget into any e-commerce site
export function mountFitRoomWidget(elementId: string) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`[FitRoom SDK] Container with id "${elementId}" not found.`);
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <FitRoomWidget />
    </React.StrictMode>
  );
}
