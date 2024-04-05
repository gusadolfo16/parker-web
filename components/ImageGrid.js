// import { styled } from "@emotion/styled";
import { Image } from "next/image";
import { useContext } from "react";
import {styled} from "styled-components"
import { AppContext } from "./Context";

const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  justify-content: center; /* Center image thumbnails horizontally */
`;

const ImageGridItem = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  cursor: pointer;
  opacity: ${props => props.isSelected ? 0.5 : 1}; /* Reduce opacity for selected images */
`;

const ImageGrid = ({ images, selectedImages, onImageSelect }) => {
  const {currentUser} = useContext(AppContext)
  console.log('ImageGrid:',currentUser)
  return (
    <>
      <h1>user: {currentUser?.email} </h1>
      <h1>image grid</h1>
      <ImageGridContainer>
      {images.map(image => (
        <ImageGridItem key={image.id} isSelected={selectedImages.includes(image.id)} onClick={() => onImageSelect(image.id, !selectedImages.includes(image.id))}>
          <Image src={image.imageUrl} alt={image.name} layout="fill" objectFit="cover" />
        </ImageGridItem>
      ))}
    </ImageGridContainer>
    </>
  );
};

export default ImageGrid;
