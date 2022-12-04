import React from 'react';
import * as styles from './GalleryCardGrid.module.css';

import GalleryCard from '../GalleryCard';
import Slider from '../Slider';

const GalleryCardGrid = (props) => {
  const {
    category,
    columns = 3,
    data,
    height,
    spacing,
    showSlider = false
  } = props;
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const renderCards = () => {
    return data.map((galleryItem, index) => {
      const { alt, image, slug, title } = galleryItem;
      return (
        <GalleryCard
          key={index}
          height={height}
          itemPath={`/gallery/${category}/item`}
          imageAlt={alt}
          image={image}
          slug={slug}
          title={title}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {data && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{data && renderCards()}</Slider>
        </div>
      )}
    </div>
  );
};

export default GalleryCardGrid;
