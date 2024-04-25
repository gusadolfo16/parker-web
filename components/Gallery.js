import { useState, useEffect, useContext } from "react";
import { getImages } from "../firebase";
import ImageGrid from "./ImageGrid";
import FilterBar from "./FilterBar"; // Import FilterBar if needed
import {MyContext} from "../context";
import { useRouter } from "next/navigation";


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]); // Track selected images

  const {currentUser, setCurrentUser} = useContext(MyContext)
  const router = useRouter()

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

  const handleFilterChange = () => {
    // do nothing
    console.log('')
  }

  const handleLogout = () => {
    if (currentUser){
      setCurrentUser(null)
    }
    router.push('/')
  }

  return (
    <div className="gallery">
      {<FilterBar onFilterChange={handleFilterChange} />} {/* Include FilterBar if needed */}
      <ImageGrid images={images} selectedImages={selectedImages} onImageSelect={handleImageSelection} />
      <button type="button" onClick={() => handleLogout()}>
        logout
      </button>
    </div>
  );
};

export default Gallery;
