import { useState, useEffect } from "react";
import { getImages } from "../firebase";
import ImageGrid from "./ImageGrid";
import FilterBar from "./FilterBar"; // Import FilterBar if needed

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]); // Track selected images

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  const handleImageSelection = (imageId, selected) => {
    setSelectedImages(prevState => {
      const updatedSelection = [...prevState];
      if (selected) {
        updatedSelection.push(imageId);
      } else {
        updatedSelection.filter(id => id !== imageId);
      }
      return updatedSelection;
    });
  };

  return (
    <div className="gallery">
      {<FilterBar onFilterChange={handleFilterChange} />} {/* Include FilterBar if needed */}
      <ImageGrid images={images} selectedImages={selectedImages} onImageSelect={handleImageSelection} />
    </div>
  );
};

export default Gallery;
