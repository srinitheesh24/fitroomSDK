export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  availableSizes: string[];
  defaultSize?: string;
}

export interface ModelData {
  id: string;
  name: string;
  imageUrl: string;
}

export interface FitFeedback {
  area: string;
  fit: 'tight' | 'loose' | 'perfect';
}
