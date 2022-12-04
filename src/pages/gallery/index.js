import * as React from 'react';

import AttributeGrid from '../../components/AttributeGrid';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Highlight from '../../components/Highlight';
import Layout from '../../components/Layout/Layout';
import ProductCollectionGrid from '../../components/ProductCollectionGrid';
import ProductCardGrid from '../../components/ProductCardGrid';
import Quote from '../../components/Quote';
import Title from '../../components/Title';

import { generateMockBlogData, generateMockProductData } from '../../helpers/mock';
//import * as styles from '../shop.module.css';
import * as styles from '../index.module.css';
import { Link, navigate } from 'gatsby';

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
