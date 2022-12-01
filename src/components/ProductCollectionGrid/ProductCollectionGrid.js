import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/hillside/20221129_092014.jpg'}
        title={'Hillside'}
        text={'Explore'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/frontyard/IMG_5011.JPG'}
        title={'Front Yard'}
        text={'Explore'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/backyard/IMG_4473.JPG'}
        title={'Back Yard'}
        text={'Explore'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/details/IMG_5454.JPG'}
        title={'Details'}
        text={'Explore'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
