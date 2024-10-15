'use client';
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import NavbarMain from "../Componets/NavbarMain";
import Footer from "../Componets/Footer";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  
  const images = [
    "https://picsum.photos/600/600",
    "https://backend.threefalcons.com/public/gallery/images/0250-min.jpg",
  ];    

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <NavbarMain />
      <div>
      
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{
              margin: "2px",
              cursor: "pointer"
            }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
