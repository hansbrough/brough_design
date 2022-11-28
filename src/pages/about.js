import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let profileRef = useRef();
  let processRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/focal_point.jpg'}
          title={`Beautiful, \n Useful, \n garden spaces.`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(profileRef)} to={'#profile'}>
            Profile
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(processRef)} to={'#process'}>
            Process
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={profileRef}>
            <p>
              Gardens are for people and garden design is about creating a space that works for the owner while still taking into account site contraints.
            </p>
            <br />
            <br />
            <p>
              Brough Design is a residential landscape design service in the San Francisco Bay Area specializing in creating beautiful, low maintenance spaces with a variety of waterwise plants from around the world.
            </p>
            <br />
            <br />
            <p>
              Hans received a Bachelor of Science in Landscape Architecture from Cal Poly, San Luis Obispo.
              Beyond the classroom and outside of work, he's dived back into gardening out of sheer enjoyment and found that
              to really know a plant it's best to use in your own garden.</p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/agave-salmiana-ferox.jpg'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Process</h3>
            <div ref={processRef}>
              <p>
                Sunspel produced some of the world's earliest T-shirts. In the
                late 1800s the business made luxury tunics and undershirts from
                lightweight Sea Island cotton for export to the Far East and
                other warm climates. While these garments initially had silk
                buttoned plackets, these were removed in the early 1900s and
                replaced with simple bound necks to reduce manufacturing costs -
                creating the T-shirt. We've supplied the world as the T-shirt
                has evolved from underwear to outerwear, from symbol of youthful
                rebellion to everyday wardrobe staple, and we've spent decades
                refining its every last aspect.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'wall construction'} src={'/IMG_2892.jpg'}></img>
            </div>

          </div>
        </Container>

      </div>
    </Layout>
  );
};

export default AboutPage;
