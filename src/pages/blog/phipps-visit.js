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
              title={'Phipps Conservatory and Botanical Garden'}
              image={'/blogs/phipps-visit/IMG_6654.JPG'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>

                </p>
                <p className={styles.blogParagraph}>

                </p>
                <p className={styles.blogParagraph}>

                </p>
                <p className={styles.blogParagraph}>

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
