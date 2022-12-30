import React from 'react';
import * as styles from '../shop.module.css';

import Banner from '../../../components/Banner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import GalleryCardGrid from '../../../components/GalleryCardGrid';
import { getCollectionData } from '../../../helpers/localFetch';

const ShopPage = (props) => {
  const data = getCollectionData(6, 'zone', 'frontyard');


  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/gallery/', label: 'Gallery' },
                { label: 'Frontyard' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Frontyard`}
          subtitle={
            ''
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div>
            <GalleryCardGrid data={data} category="frontyard"></GalleryCardGrid>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
