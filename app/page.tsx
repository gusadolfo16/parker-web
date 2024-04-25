'use client';
import { useContext, useState, useEffect } from "react";
import { getImages } from "../firebase";
import Gallery from "../components/Gallery";
import Link from 'next/link'
import {MyContext} from "../context";


const Home = () => {
  const {currentUser} = useContext(MyContext);
  const [images, setImages] = useState<{ id: string; }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImages();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);

  console.log('home:', currentUser, images)

  const renderLogin = () => {
    return (
      <>
        <h1>Please login to access the gallery.</h1>
        <Link href="/login">Login</Link>
      </>
    )
  }

  return (
    <div>
      {currentUser ? <Gallery /> : renderLogin()}
    </div>
  );
};

export default Home;
