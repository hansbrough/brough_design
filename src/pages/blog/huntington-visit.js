import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'Travel'}
              title={'Huntington Botanical Gardens'}
              image={'/blogs/garden-cities/20220413_144619.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  I recently stopped by the Huntington Gardens in Pasadena, CA for the first time after what seems like years of reading about the trips of others.
                  I was truly surprised by the size of the grounds and variety of plants across the many themed gardens!
                </p>
                <p className={styles.blogParagraph}>
                  The Huntington is like Disneyland for plant aficionados - complete with a 'Main Street".
                  Along both sides of this alley are many patios for small groups, families or just individuals to relax.
                  I thought it was a brilliant idea!
                </p>
                <p className={styles.blogParagraph}>
                  At end of the entrance alley is a rill with paths on either side leading visitors toward the heart of the botanical gardens.
                </p>
                <p className={styles.blogParagraph}>

                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/cloth.png'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/collections/collection1.png'} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Lorem ipsum</h2>
                <p className={styles.blogParagraph}>
                  Our Services, including but not limited to the registration of
                  an account with us or placing of an order, is not intended to
                  be used by children under the age of 13. When a visitor
                  indicates an age under 13, the registration process for The
                  Upside website cannot be completed, and no personally
                  identifying information is collected in conjunction with that
                  attempted submission except that we retain e-mail addresses of
                  such persons (and record of access attempts) for purposes of
                  denying registration. Otherwise, we do not knowingly collect
                  personally identifiable information from visitors under the
                  age of 13.
                </p>
                <p className={styles.blogParagraph}>
                  If you are under 18, any use of our Services must be with the
                  involvement of a parent or guardian. By accessing or using our
                  Website, you warrant and represent to us that you are over the
                  age of 18 years and you have the right, authority and legal
                  capacity to enter into a legally binding agreement and to
                  abide by this Privacy Policy.
                </p>
                <p className={styles.blogParagraph}>
                  The Upside collects, uses and discloses information regarding
                  users aged 13-18 in the same manner as it does for adults.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
