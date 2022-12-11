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
                { link: '/gallery/', label: 'Gallery' },
                { label: 'Details' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Details`}
          subtitle={
            'Whether in a pot or in the ground it makes sense to add more detail to your garden in areas where visitors are have the time to look.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div>
            <GalleryCardGrid data={data} category="details"></GalleryCardGrid>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
