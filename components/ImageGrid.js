import React from 'react';
import Image from 'next/image';

const ImageGrid = ({ images, onImageSelect, onImageUnselect }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <Image
            src={image.url}
            alt={image.alt}
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
            layout="fill"
            objectFit="cover" // Adjust objectFit as needed
            className="image"
          />
          <div className="image-actions">
            {image.selectedBy ? (
              <button onClick={() => onImageUnselect(image.id)}>Unblock</button>
            ) : (
              <button onClick={() => onImageSelect(image.id)}>Select</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
