import React from 'react';
import * as styles from '../shop.module.css';

import Banner from '../../../components/Banner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import GalleryCardGrid from '../../../components/GalleryCardGrid';
import { getCollectionData } from '../../../helpers/localFetch';

const ShopPage = (props) => {
  const data = getCollectionData(6, 'zone', 'detail');


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/', label: 'Gallery' },
                { label: 'Details' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Details`}
          subtitle={
            'Sometimes in the garden it makes sense to add a section with a larger amount of detail.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.GalleryContainer}>
            <GalleryCardGrid data={data} category="details"></GalleryCardGrid>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
