import * as React from 'react';

import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import ProductCollectionGrid from '../../components/ProductCollectionGrid';

import * as styles from '../index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { link: '/gallery/', label: 'Gallery' }
            ]}
          />
        </div>
      </Container>
      <Banner
        maxWidth={'650px'}
        name={`Gallery`}
        subtitle={
          'Life is better with a garden.'
        }
      />

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <ProductCollectionGrid />
        </Container>
      </div>
      </Layout>
    );
  };

export default IndexPage;
