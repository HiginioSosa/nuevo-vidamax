import React, { useState } from 'react';
import './Banner.scss';

interface BannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  fallbackSrc?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt, 
  fallbackSrc 
}) => {
  const [imgSrc, setImgSrc] = useState<string>(imageSrc);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <section className="banner">
      <img
        src={imgSrc}
        alt={imageAlt}
        className="banner__image"
        loading="lazy"
        onError={handleImageError}
      />
    </section>
  );
};

export default Banner;