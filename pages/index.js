import { useContext, useState, useEffect } from "react";
import { getImages } from "../firebase";
import Gallery from "../components/Gallery";
//import {AuthContext} from "../_app.js"; // Import AuthContext

const Home = () => {
  const currentUser = null// useContext(AuthContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  return (
    <div>
      {currentUser ? <Gallery images={images} /> : <h1>Please login to access the gallery.</h1>}
    </div>
  );
};

export default Home;
