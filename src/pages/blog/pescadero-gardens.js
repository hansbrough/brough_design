import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const BlogPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'Garden Tour'}
              title={'Pescadero Area Garden Tour'}
              image={'/blogs/pescadero-gardens/IMG_4288.JPG'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  These are gardens on a part of the California coast that had limited access by stage coach until as late as the 1920's.
                </p>
                <p className={styles.blogParagraph}>
                  One weekend while at a favorite nursery I noticed a promotional card entitled "Gardens of the South Coast Tour".
                </p>
                <p className={styles.blogParagraph}>
                  The tour consisted of a combination of 14 private gardens, farms and ranches in the South Coast region of San Mateo County.
                  If you've ever driven Hwy 1 between San Francisco and Santa Cruz you may have driven through the area.
                  Specifically - the South Coast is along Hwy 1, between Half Moon Bay and northern Santa Cruz County which is a beautiful stretch of road running past lots of small state beaches.
                  Pescadero's mild climate is a bit different from my home town of San Carlos just 30 miles away on the other side of the coastal ranges - as a result the garden's contained many plants I wouldn't normally consider planting.
                </p>
                <p className={styles.blogParagraph}>
                  The coastal marine layer was out in force, which isn't unusual, but even by the residents reckoning this day the fog and low clouds seemed particularly heavy.
                  Each garden in the tour was conveniently marked for out of town visitors like myself.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4283.jpg'} alt={'Pescadero house in garden tour'} />
                </div>
                <p className={styles.blogParagraph}>
                  From the guide "Our garden is divided into different 'rooms,' featuring roses, perennials, herbs, and flowering trees.
                  There is a long double border, an enclosed rose garden, and an area for vegetables and fruit trees. Around our water tower is a cottage garden on one side and a white planted garden on the other side."
                </p>
                <div className={styles.imageContainer}>
                  <img src={'/blogs/pescadero-gardens/IMG_4281.jpg'} alt={'Pescadero house in garden tour'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/blogs/pescadero-gardens/IMG_4284.jpg'} alt={'Pescadero house in garden tour'} />
                </div>
                <p className={styles.blogParagraph}>
                  One of the owners mentioned that this was the home of a man who drove a local stage coach which was in operation until the 1920's.
                </p>
                <p className={styles.blogParagraph}>

                </p>
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

export default BlogPage;
