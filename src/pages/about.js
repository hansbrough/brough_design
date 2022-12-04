import React, { useRef } from 'react';
import { Link } from 'gatsby';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let profileRef = useRef();
  let processRef = useRef();
  let plantsRef = useRef();

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
          image={'/agave-salmiana-ferox.jpg'}
          title={`Beautiful, \n Useful, \n garden spaces.`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(profileRef)} to={'#profile'}>
            Profile
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(processRef)} to={'#process'}>
            Process
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(plantsRef)} to={'#plants'}>
            Plants
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
          <img alt={'waterwise garden wall'} src={'/IMG_5801.jpg'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Process</h3>
            <div ref={processRef}>
              <p>
                We've found that a successful landscape design project generally follows a few basic steps.
              </p>
              <h5>Inquiry</h5>
              <p>
                Use the <Link to="/support#contact">Contact Us</Link> page to share details about your landscape project.  We'll set up a short phone session to make sure that we're a good fit for your project.
              </p>
              <h5>Consultation</h5>
              <p>
                During an onsite visit we will talk about what works currently, any garden goals you may have, challenges the site poses, scope of work, budget, and generally get a sense of your lifestyle insofar as it might impact the garden space.
                We may propose a few ideas based on questions that arise from the visit. You can expect the site visit to last from 1 to 2 hours and is billed as a flat fee of $150.
              </p>
              <h5>Site Analysis and Inspiration</h5>
              <p>
                If we both agree to proceed after the consultation The next steps are to measure, map and analyze your site in order to create a base plan which will be used as design alternatives are explored.
                Site analysis includes investigating local ordinances that may impact your landscape project.
                We will also work together to catalog inspirational plants, materials and garden designs from around the neighborhood, online or from books as a tool to understand your preferences.
              </p>
              <h5>Conceptual Designs</h5>
              <p>
                We will propose a few alternative designs, drawn to scale, and collaborate to determine what works best with regards to topics such as circulation patterns, sitelines, plants and of course your aesthetic preferences.
                Decisions made at this stage help to inform the final design.
              </p>
              <h5>Final Design Plan</h5>
              <p>
                Decisions made during conceptual design phase will be formalized in a set of final design documents which can be used to solicit bids from contractors.
              </p>
              <h5>Implementation</h5>
              <p>
                During the construction phase we will be available to advise and work through any challenges that may arise.
                We can also act as an advocate on your behalf during installation - for example ensuring that plant and path layouts matches the design.
                As a licensed nursery sourcing plant materials is one of specialties so we can work with your contractor to find quality plants.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'waterwsie nursery plants'} src={'/nursery_plants.jpg'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Plants</h3>
            <div ref={plantsRef}>
              <p>
                Sometimes it can be a challenge to source plants included in a garden design.
              </p>
              <h5>Sourcing</h5>
              <p>
                Landscape and specimen sized plants can be hard to find which is part of why we decided to become a licensed nursery and reseller.
                Selling plants to your contractor at a discount gives you access to a broader variety of plants at a reasonable price.
                In many cases what we don't have in stock we can buy wholesale from larger nurseries in the area.
              </p>
              <h5>Mediterranean Climate</h5>
              <p>
                We grow many specialized Agave and Aloe to larger sizes exactly because they are so well suited to our mild (and dry) Bay Area climate.
                In general plants from other Mediterranean regions around the world will adapt well to life on the S.F. Penninsula and
                mixing a variety of plant forms, textures and colors means your low water use garden doesn't have to look like a desert.
              </p>
              <h5>Pollenators</h5>
              <p>
                Garden spaces are so much more interesting when wildlife visits (ok - not <em>all</em> wildlife)!
                We are lucky in the Bay Area in that with a little planning we can have something in bloom just about year round.
                For example Aloes bloom during the Winter which means they attract lots of hummingbirds and bees at a time when they can most use the food.
              </p>
            </div>

          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'Puya plant'} src={'/IMG_5946.jpg'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
