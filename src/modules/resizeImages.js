import PhotoSwipeLightbox from 'photoswipe/lightbox';

const resizeImages = () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery-sertificate a',
    pswpModule: () => import('photoswipe'),
  });
  lightbox.init();
};

export default resizeImages;
