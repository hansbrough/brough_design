import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData } from '../helpers/mock';

import * as styles from './index.module.css';

const IndexPage = () => {
  const blogData = generateMockBlogData(3);

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/focal_point.jpg'}
        title={'Garden Inspiration'}
        subtitle={'Using waterwise plants'}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          <span className={styles.gold}>attention</span> and <span className={styles.gold}>imagination</span> applied to every design.
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/20221129_091853.jpg'} title={`The Dry Garden`} />
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Brough Design'}
        quote={
          '“Waterwise gardens don\'t have to look like a desert. There are lots of plants from around the world which can help create a verdant garden with less water.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on garden style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/greenhouse_bulbils.jpg'}
          title={'Shop for Plants'}
          subtitle={
            'From Aloes to Agave and Cacti, discover plants on our retail store.'
          }
          ctaText={'shop now'}
          ctaAction={() => window.open("https://dryoasisplants.com","_blank")}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
