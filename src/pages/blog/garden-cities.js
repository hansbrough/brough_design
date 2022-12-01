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
              category={'City and Regional Planning'}
              title={'Comparing Garden Cities'}
              image={'/blogs/garden-cities/20220413_144619.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Cities have an iconic sense of place because they've responded to unique environmental and historical circumstances.
                  It's their uniqueness which helps to make both Savannah and Palm Springs popular destinations.
                </p>
                <p className={styles.blogParagraph}>
                  I started a post entitled "The Mid Century Modern Landscape in Palm Springs" after a road trip to the area last year but somehow never managed to finish.
                  After visiting Savannah Georgia a few months ago I thought the contrast between the two places was interesting.
                  The history, geography and climate of both are uniquely different and have contributed to the creation of different gardens and public spaces. An entire book could be written about this topic.
                  I won't be able to do it justice in this format - so apologies in advance for any glaring omissions.
                </p>
                <h2 className={styles.blogSubHeader}>A Shockingly Short History of both Places</h2>
                <p className={styles.blogParagraph}>
                  Palm Springs started to become a residential community in the mid 1920's as Hollywood stars sought a nearby place of refuge from gossip columnists.
                  Most of it's architecture and public spaces date from this period onward.
                  Many of it's neighborhoods were created en masse by developers which contributes to it's suburban vibe.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/palm_springs_neighborhoods.png'} alt={'neighborhood map of Palm Springs'} />
                </div>
                <p className={styles.blogParagraph}>
                  Savannah was a planned city started in the 1730's as a bulwark against the Spanish further south. Most importantly, for gardening aficionados, the city's layout includes 22 public squares spaced just a few blocks apart.
                  Each square is a small park surrounded by a combination of residential, civic and religious buildings.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/savannah_historic_district_map.jpg'} alt={'Neighborhood map of Savannah'} />
                </div>
                <p className={styles.blogParagraph}>
                  In Palm Springs the <a href="https://en.wikipedia.org/wiki/San_Jacinto_Mountains" rel="no-follow">San Jacinto Mountains</a> make for a dramatic, ever present backdrop that can be felt throughout many of the cities neighborhoods.
                  The views, like the streets, are wide and the mountains helped this wandering, first time visitor with orientati
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
