import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './GalleryCard.module.css';
import Icon from '../Icons/Icon';

const GalleryCard = (props) => {
  console.log("GalleryCard props:",props)
  const [isWishlist, setIsWishlist] = useState(false);
  const {
    itemPath,
    image,
    imageAlt,
    height = 580,
    slug,
    title
  } = props;

  const handleRouteToProduct = (itemPath) => {
    itemPath && navigate(itemPath, { state: { image, slug } });
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct(itemPath)}
        role={'presentation'}
      >
        <img style={{ height: `${height}px` }} src={image} alt={imageAlt}></img>
      </div>
      <div className={styles.detailsContainer}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
