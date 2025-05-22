// src/components/ImageUploader.tsx
import React, { useRef, useContext } from 'react';
import { FitRoomContext } from '../context/FitRoomContext';
import Button from './common/Button';

const ImageUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { userImage, setUserImage } = useContext(FitRoomContext);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Upload Your Photo</h3>
      <div className="flex items-center space-x-4">
        {userImage ? (
          <img
            src={userImage}
            alt="User"
            className="w-24 h-24 object-cover rounded border"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-100 border flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
        <Button onClick={() => fileInputRef.current?.click()}>
          {userImage ? 'Change' : 'Upload'}
        </Button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
