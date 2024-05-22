import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import "photoswipe/style.css";
import "../views/Main.css"
import { Layout } from '../components/Layout/Layout';

const imageData = [
  { href: "./src/img/img-proyect/img1.webp", src: "./src/img/img-proyect/img1.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img2.webp", src: "./src/img/img-proyect/img2.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img3.webp", src: "./src/img/img-proyect/img3.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img4.webp", src: "./src/img/img-proyect/img4.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img5.webp", src: "./src/img/img-proyect/img5.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img6.webp", src: "./src/img/img-proyect/img6.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img7.webp", src: "./src/img/img-proyect/img7.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img8.webp", src: "./src/img/img-proyect/img8.jpg", width: 800, height: 1037 },
  { href: "./src/img/img-proyect/img9.webp", src: "./src/img/img-proyect/img9.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img10.webp", src: "./src/img/img-proyect/img10.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img11.webp", src: "./src/img/img-proyect/img11.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img12.webp", src: "./src/img/img-proyect/img12.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img13.webp", src: "./src/img/img-proyect/img13.jpg", width: 800, height: 1051 },
  { href: "./src/img/img-proyect/img14.webp", src: "./src/img/img-proyect/img14.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img16.webp", src: "./src/img/img-proyect/img16.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img17.webp", src: "./src/img/img-proyect/img17.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img18.webp", src: "./src/img/img-proyect/img18.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img19.webp", src: "./src/img/img-proyect/img19.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img21.webp", src: "./src/img/img-proyect/img21.jpeg", width: 800, height: 1069 },
  { href: "./src/img/img-proyect/img23.webp", src: "./src/img/img-proyect/img23.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img24.webp", src: "./src/img/img-proyect/img24.jpeg", width: 800, height: 1069 },
  { href: "./src/img/img-proyect/img25.webp", src: "./src/img/img-proyect/img25.jpg", width: 800, height: 1063 },
  { href: "./src/img/img-proyect/img27.webp", src: "./src/img/img-proyect/img27.jpg", width: 800, height: 1069 },
  { href: "./src/img/img-proyect/img28.webp", src: "./src/img/img-proyect/img28.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img29.webp", src: "./src/img/img-proyect/img29.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img22.webp", src: "./src/img/img-proyect/img22.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img30.webp", src: "./src/img/img-proyect/img30.jpg", width: 800, height: 1067 },
  { href: "./src/img/img-proyect/img31.webp", src: "./src/img/img-proyect/img31.jpg", width: 800, height: 1067 }
];

export const Main = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery--individual',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
    <Layout>
    <div className="pswp-gallery" id="gallery--individual">
      {imageData.map((image, index) => (
        <a key={index} href={image.href} data-pswp-width={image.width} data-pswp-height={image.height} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={`Image ${index + 1}`} />
        </a>
      ))}
    </div>
    </Layout>
    </>
  );
};