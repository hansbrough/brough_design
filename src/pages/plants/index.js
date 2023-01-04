import * as React from 'react';

import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero';


import * as styles from '../index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { link: '/plants/', label: 'Plants' }
            ]}
          />
        </div>
      </Container>
      <Banner
        maxWidth={'650px'}
        name={`Plants`}
        subtitle={
          'Find plants for your landscape project.'
        }
      />

      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <h5>Sourcing</h5>
          <p>
            Sometimes it can be a challenge to source plants included in a garden design which is part of why we decided to become a licensed nursery and reseller.
            Selling plants to your contractor at a trade discount gives you access to a broader variety of plants at a reasonable price.
            In many cases what we don't have in stock we can buy wholesale from larger nurseries in the area.
            Signing up is easy - just send your landscape professional over to <a href="https://broughplants.com/apply" target="_blank">broughplants.com/apply</a>
          </p>
          {/* Promotion */}
          <div className={styles.heroContainer}>
            <Hero
              image={'/greenhouse_bulbils.jpg'}
              title={'Find Plants for your Project'}
              subtitle={
                'Trade discounted pricing is available to your contractor'
              }
              ctaText={'Find Plants'}
              ctaAction={() => window.open("https://broughplants.com","_blank")}
              maxWidth={'660px'}
              ctaStyle={styles.ctaCustomButton}
            />
          </div>
          <h5>Mediterranean Climate</h5>
          <p>
            We grow many specialized Agave and Aloe to larger sizes exactly because they are so well suited to our mild (and dry) Bay Area climate.
            In general plants from other Mediterranean regions around the world will adapt well to life on the S.F. Penninsula and
            mixing a variety of plant forms, textures and colors means your low water use garden doesn't have to look like a desert.
          </p>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'waterwsie nursery plants'} src={'/nursery_plants.jpg'}></img>
        </div>

        </div>
      </Layout>
    );
  };

export default IndexPage;
