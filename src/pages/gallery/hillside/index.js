import React from 'react';
import * as styles from '../shop.module.css';

import Banner from '../../../components/Banner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import GalleryCardGrid from '../../../components/GalleryCardGrid';
import { getCollectionData } from '../../../helpers/localFetch';

const ShopPage = (props) => {
  const data = getCollectionData(6, 'zone', 'hillside');


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/gallery/', label: 'Gallery' },
                { label: 'Hillside' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Hillside`}
          subtitle={`
            Landscaping a steep slope can be a challenge but it shoudn't stop you from creating a garden.
          `}
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.productContainer}>
            <GalleryCardGrid data={data} category="hillside"></GalleryCardGrid>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
