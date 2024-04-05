import { useContext, useState, useEffect } from "react";
import { getImages } from "../firebase";
import Gallery from "../components/Gallery";
import {AppContext, AppProvider} from '../components/Context'
import Link from 'next/link'


const Home = () => {
  const {currentUser} = useContext(AppContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  console.log('home:', currentUser)

  const renderLogin = () => {
    return (
      <>
        <h1>Please login to access the gallery.</h1>
        <Link href="/login">Login</Link>
      </>
    )
  }

  return (
    <AppProvider>
      <div>
        {currentUser ? <Gallery images={images} /> : renderLogin()}
      </div>
    </AppProvider>
    
  );
};

export default Home;
