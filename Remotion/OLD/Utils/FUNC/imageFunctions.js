import { useState, useEffect } from 'react';
/**
 * Calculates the orientation and ratio of an image and returns the dimensions needed for it to be placed correctly
 * @param {number} height - The height of the image in pixels
 * @param {number} width - The width of the image in pixels
 * @returns {string} - A string representing the dimensions needed for the image to be placed correctly
 */
export function calculateImageSize(height, width, MaxHeight=300, MaxWidth=600) {
  const ratio = width / height;
  let newHeight = height;
  let newWidth = width;

  if (ratio === 1) {
    newHeight = 400;
    newWidth = 400;
  } else if (newHeight > MaxHeight) {
    newHeight = MaxHeight;
    newWidth = newHeight * ratio;
  }

  if (newWidth > MaxWidth) {
    newWidth = MaxWidth;
    newHeight = newWidth / ratio;
  }

  return { height: newHeight, width: newWidth };
}




export const useImageOrientation = (src) => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const img = new Image();

    img.onload = function() {
      if (this.naturalWidth > this.naturalHeight) {
        setOrientation('landscape');
      } else if (this.naturalWidth < this.naturalHeight) {
        setOrientation('portrait');
      } else {
        setOrientation('square');
      }
    };

    img.src = src;
  }, [src]);

  return orientation;
};
