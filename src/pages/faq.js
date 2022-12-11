import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/IMG_7413.JPG'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>Does Brough Design specialize in a size or style of garden?</h3>
              <p>
                We work with our clients to design any style of garden tempered by practical considerations such as climate, local fauna and city ordinances.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>What is your typical design cost?</h3>
              <p>
                As a general rule the design costs will run about 10% of the total cost for larger projects and up to 25% for smaller projects.
                Smaller projects usually include a portion of the property and need a limited set of construction documents like a planting plan and calling out semi-permanent hardscape such as dry laid flagstone paths or low dry stack walls.
                Design costs for smaller projects will typically run between $2,000 - $4,000.
                Larger projects are ones that include redesigning both front, back yards, and may include grading and drainage work, low voltage lighting plans, or irrigation plans for areas of planting greater than 500 sqft.
                Design costs for larger projects will typically run between $4,000 - $10,000.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Should I hire a Landscape Designer or a Landscape Architect?</h3>
              <p>
                The difference between a Landscape Designer and Landscape Architect is one of licensing, technical expertise and perhaps experience. Landscape Architects have graduated from an accredited university program, interned at a licensed firm and passed a set of rigorous state exams.
                Landscape Architects may also end up specializing in areas like building Regional Parks, Zoo's, Golf Course design, etc.
                Landscape Designers generally have some form of schooling but are legally limited in scope to residential design that does not include some of the more technical aspects like producing a grading and drainage plan.
                As a result there are some aspects of a project that will require the services of a licensed Landscape Architect and/or Engineer such as retaining walls over 3 ft in height, pools, use of high voltage electrical (e.g. 120 volt household current), natural gas and structures such as a pergola.
                If your project requires detailed construction documents to be approved by the local building department chances are you will need to hire a licensed Landscape Architect.
                Landscape Designers are not required to be licensed by the state and can be an excellent choice when your residential project is smaller in scale and includes primarily planting changes.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>What construction documentation do your plans cover?</h3>
              <p>
                As a Landscape Design firm we can legally provide detailed planting plans, irrigation plans, low voltage lighting plans, and master plans that include features like patios, and low height retaining walls.
                We can also supply drawings that show typical aspects of semi-permanent structures like dry laid, low, stone walls.
                These drawings won't be suitable to submit as official construction documentation but will help you communicate expectations to a contractor.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Are you available to coordinate planting on site?</h3>
              <p>
                Yes, we can be available on site to ensure the correct plants have arrived and physically place them in the landscape.
                When there is a descrepency in the number, type, size or quality of plants between the design and what was delivered we will work with the landscape contractor to fix the issue.
                Hourly rates beyond the standard design costs will apply.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Will you help source plants specified in the design?</h3>
              <p>
                Yes, we can definitely help find plants through our own licensed nursery or buying wholesale from other nurseries.
                We will sell plants to your licensed landscape contractor at a 15% discount off a typical retail price.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
