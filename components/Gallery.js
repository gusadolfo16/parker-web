import React from 'react';
import ImageGrid from './ImageGrid';
import FilterBar from './FilterBar'; // Optional

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {/** Optional: Add FilterBar component */}
      {/* <FilterBar /> */}
      <ImageGrid images={images} />
      {/** Optional: Add pagination controls */}
    </div>
  );
};

export default Gallery;
