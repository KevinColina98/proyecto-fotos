import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import "photoswipe/style.css";
import "../views/Main.css"
import { Layout } from '../components/Layout/Layout';

const imageData = [
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg1.webp?alt=media&token=afa105a3-32c1-4ec4-9d34-e409e14c956b", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg1.webp?alt=media&token=afa105a3-32c1-4ec4-9d34-e409e14c956b", width: 800, height: 1067 },

  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg2.webp?alt=media&token=5a581bee-42f6-4a77-9b02-8753bd089548", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg2.webp?alt=media&token=5a581bee-42f6-4a77-9b02-8753bd089548", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg3.webp?alt=media&token=1c3b86de-9f02-46f9-b9ba-e904c990b8df", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg3.webp?alt=media&token=1c3b86de-9f02-46f9-b9ba-e904c990b8df", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg4.webp?alt=media&token=868dec4c-092b-4cdd-9e35-de14c89fc49e", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg4.webp?alt=media&token=868dec4c-092b-4cdd-9e35-de14c89fc49e", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg5.webp?alt=media&token=6f5445db-843b-45b5-9088-05ed90d0276e", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg5.webp?alt=media&token=6f5445db-843b-45b5-9088-05ed90d0276e", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg6.webp?alt=media&token=b3e21d29-c038-43b9-b125-f9f35869437d", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg6.webp?alt=media&token=b3e21d29-c038-43b9-b125-f9f35869437d", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg8.webp?alt=media&token=5b418420-b72d-4dcb-8a48-7d3b9edb8f54", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg8.webp?alt=media&token=5b418420-b72d-4dcb-8a48-7d3b9edb8f54", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg9.webp?alt=media&token=c8d8763d-8496-4d92-9e4c-e94bba8f9ad1", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg9.webp?alt=media&token=c8d8763d-8496-4d92-9e4c-e94bba8f9ad1", width: 800, height: 1067 }, 
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg10.webp?alt=media&token=65d7f42c-6024-42a1-a1d7-7062ee8a8028", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg10.webp?alt=media&token=65d7f42c-6024-42a1-a1d7-7062ee8a8028", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg11.webp?alt=media&token=c9bfb4a3-f2a2-4a88-b8af-57b697c913a9", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg11.webp?alt=media&token=c9bfb4a3-f2a2-4a88-b8af-57b697c913a9", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg12.webp?alt=media&token=7f924d16-84f1-48f0-af56-b05dbb686bbe", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg12.webp?alt=media&token=7f924d16-84f1-48f0-af56-b05dbb686bbe", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg13.webp?alt=media&token=36830c58-05a0-431c-9747-25992fe3a21f", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg13.webp?alt=media&token=36830c58-05a0-431c-9747-25992fe3a21f", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg14.webp?alt=media&token=2d301e86-98d3-4203-a113-9f4765ccfc8c", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg14.webp?alt=media&token=2d301e86-98d3-4203-a113-9f4765ccfc8c", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg16.webp?alt=media&token=ac5880ba-e334-41b7-9b9d-575e028179af", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg16.webp?alt=media&token=ac5880ba-e334-41b7-9b9d-575e028179af", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg17.webp?alt=media&token=186054f5-7e8d-4b96-b541-8f132e76013a", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg17.webp?alt=media&token=186054f5-7e8d-4b96-b541-8f132e76013a", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg18.webp?alt=media&token=d7eb14f8-6d96-4008-9d3e-b79622ba96ce", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg18.webp?alt=media&token=d7eb14f8-6d96-4008-9d3e-b79622ba96ce", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg19.webp?alt=media&token=38e0fe9b-4fb5-4243-a95e-100b15bfe16d", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg19.webp?alt=media&token=38e0fe9b-4fb5-4243-a95e-100b15bfe16d", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg21.webp?alt=media&token=b3f8a938-2b5c-412f-847b-133fe8e2e888", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg21.webp?alt=media&token=b3f8a938-2b5c-412f-847b-133fe8e2e888", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg23.webp?alt=media&token=69763aa6-9d4d-4561-b88b-1e2c26954486", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg23.webp?alt=media&token=69763aa6-9d4d-4561-b88b-1e2c26954486", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg22.webp?alt=media&token=3d994db5-740d-49d7-b213-cf31490a8ece", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg22.webp?alt=media&token=3d994db5-740d-49d7-b213-cf31490a8ece", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg24.webp?alt=media&token=9b6dbe4f-0364-481c-b96a-0871a51c4885", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg24.webp?alt=media&token=9b6dbe4f-0364-481c-b96a-0871a51c4885", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg25.webp?alt=media&token=3405941e-977f-477e-9d21-2c56b5a9798a", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg25.webp?alt=media&token=3405941e-977f-477e-9d21-2c56b5a9798a", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg26.webp?alt=media&token=cd0a8127-cebc-4c62-8d4d-d77596cbe22c", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg26.webp?alt=media&token=cd0a8127-cebc-4c62-8d4d-d77596cbe22c", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg27.webp?alt=media&token=bea90d5b-bafd-4b7a-831d-86cf3dbefc25", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg27.webp?alt=media&token=bea90d5b-bafd-4b7a-831d-86cf3dbefc25", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg28.webp?alt=media&token=365bca71-ade8-49a0-ae5e-84aa4a8720a6", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg28.webp?alt=media&token=365bca71-ade8-49a0-ae5e-84aa4a8720a6", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg29.webp?alt=media&token=2ebd380e-f523-41e5-93a3-e48c71d20d6f", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg29.webp?alt=media&token=2ebd380e-f523-41e5-93a3-e48c71d20d6f", width: 800, height: 1067 },
  { href: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg30.webp?alt=media&token=46daeb78-b9d2-47a8-bcc5-fdbaf9cc8b94", src: "https://firebasestorage.googleapis.com/v0/b/pryectofotos.appspot.com/o/documentos%2Fimg30.webp?alt=media&token=46daeb78-b9d2-47a8-bcc5-fdbaf9cc8b94", width: 800, height: 1067 },

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