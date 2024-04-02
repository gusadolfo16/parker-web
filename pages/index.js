import React from 'react';
import Gallery from '../components/Gallery';
import { getImages } from '../utils/imageSelection'; // Get images from Firestore

const Home = ({ images }) => {
  return (
    <div>
      <h1>Parker Web Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export async function getStaticProps() {
  const images = await getImages(); // Fetch image data from Firestore
  return {
    props: { images },
  };
}

export default Home;
