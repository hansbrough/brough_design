import React from 'react';
import * as styles from '../shop.module.css';

import Banner from '../../../components/Banner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import GalleryCardGrid from '../../../components/GalleryCardGrid';
import { getCollectionData } from '../../../helpers/localFetch';

const ShopPage = (props) => {
  const data = getCollectionData(10, 'zone', 'backyard');


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/gallery/', label: 'Gallery' },
                { label: 'Backyard' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Backyard Inspiration`}
          subtitle={
            'From a place of refuge to a place to gather with friends - backyards can be the heart of your property.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.productContainer}>
            <GalleryCardGrid data={data} category="backyard"></GalleryCardGrid>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
