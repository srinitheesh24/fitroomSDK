export const formatSizeLabel = (size: string): string => {
  return size.toUpperCase();
};

export const isValidImageFile = (file: File): boolean => {
  return ['image/jpeg', 'image/png'].includes(file.type);
};
