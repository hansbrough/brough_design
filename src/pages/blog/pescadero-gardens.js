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
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4283.jpg'} alt={'Pescadero house in garden tour'} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  From the guide "Our garden is divided into different 'rooms,' featuring roses, perennials, herbs, and flowering trees.
                  There is a long double border, an enclosed rose garden, and an area for vegetables and fruit trees. Around our water tower is a cottage garden on one side and a white planted garden on the other side."
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4281.jpg'} alt={'Pescadero house in garden tour'} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4284.jpg'} alt={'Pescadero house in garden tour'} />
                  <figcaption></figcaption>
                </figure>

                <p className={styles.blogParagraph}>
                  One of the owners mentioned that this was the home of a man who drove a local stage coach which was in operation until the 1920's.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4285.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4286.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4287.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4288.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4289.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  As you may have noticed - flower borders ran throughout the garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4291.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The old water tower creates a private side garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4292.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  View into the ground floor of the water tower - almost looks like a county run museum.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4306.jpg'} alt={''} />
                  <figcaption>The "Random Garden"</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4298.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  This property has a small creek running through the middle of the backyard.
                  It's difficult to tell from this angle but the bridge wass definitely a practical addition.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4301.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  We missed the lavender bloom by a few weeks.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4300.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Dominating the backyard is a large Redwood which it's safe to say creates it's own micro-climate.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4299.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The mix of Redwood Sorrel, Pacific Bleeding Heart and Vinca seem to be thriving.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4338.jpg'} alt={''} />
                  <figcaption>Forever Bloom Farm, 413 Dearborn Park Road</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  As I pulled into the parking lot I was greeted at the farm stand with the offer of a complementary, homemade cookie and glass of lemonade.
                  The residents of Forever Bloom Farm were some of the friendliest on the tour.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4328.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Forever bloom is a cut flower farm as you can see above - although they also had fields of strawberries and other edibles.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4330.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4337.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Looking back toward the coast and into a blanket of fog. This 5 acre farm was one of the few sunny spots of the day.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4325.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4326.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4373.jpg'} alt={''} />
                  <figcaption>Shared Garden on Pescadero Creek Road</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  From the guide "These small Victorian houses on the main road into town have mature, robust borders closely planted for texture, dramatic shape and privacy. The gardens open into each other so that the communal animals share a space."
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4344.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I walked down the driveway looking for the garden or a host.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4347.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I wasn't sure if I was allowed to enter but it was interesting looking - so figured I'd ask for forgiveness if necessary. Had I read the guide more closely I would have realized this was the shared garden for two houses.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4354.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Wow! Inside was an explosion of color, texture and shape.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4355.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Above is a view of the street entrance to the second house.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4356.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  It's difficult to tell from the photo below but the Jerusalem Sage probably stood over 6ft tall in places! Walking through it felt as if I was completely enveloped in a sea of yellow.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4357.jpg'} alt={''} />
                  <figcaption>Jerusalem Sage</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4361.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Looking back toward the main street and entrance to the garden. The flower stalk in the distance looked to be from a massive Agave salmiana.
                  I regret that the owners were not around when I visited - I really wanted to meet them and ask about how their garden evolved.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4362.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Looking toward the back of the property and an intimate seating area. The owners did an excellent job of framing views at the end of each path.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4369.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Circling back toward the first house and our entry point into the garden. Every stretch of path created a sense of mystery with their sinuous curving shapes and mature planting that blocked just enough of the views. Do you think at least one of the owners is an artist or designer?
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4370.jpg'} alt={''} />
                  <figcaption>Chickens who get the run of the communal gardens</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4371.jpg'} alt={''} />
                  <figcaption>Opuntia and bespoke wooden fence</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  This impressive looking wall is about where we entered the shared garden.
                  The barrier of driftwood, cypress branches(?) and mass of Opuntia give the garden a whimsical feel.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4394.jpg'} alt={''} />
                  <figcaption>Bean Hollow Road</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  From the guide "The Garden sits on a 4 acre parcel, of which about 1/2 acre is cultivated beds. It is a serendipitous garden that has been continually evolving for 25 years.
                  People frequently ask me how I manage to always have something in bloom, to which my reply is that I go to nurseries every month and buy what's in bloom."
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4375.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The front garden and main entrance to the house feel different than the backyard.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4390.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I thought the leaves of this hydrangea were striking against the house's stone facade.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4377.jpg'} alt={''} />
                  <figcaption>Garden shed</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  A theme in this garden.... Buddha statues and brightly colored flowers.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4378.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Walking around the side of the house and into the terraced backyard.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4381.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Yes, the garden comes with a large pond. Nasturtium seems to grow wild here... it was in most of the gardens and even grows wild on the side of hwy 92.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4384.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I see a smattering of the familiar Agave, Aloe, and Kniphofia in the above picture. What felt different about this garden from my own were the broad leaf plants and generous lawns that roll throughout the property.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4393.jpg'} alt={''} />
                  <figcaption>Pride of Madeira</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I couldn't resist posting this soothing 'wall of green' - located just behind a side gate. Echium is a plant that also grows wild on the side of the road in these parts.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/pescadero-gardens/IMG_4388.jpg'} alt={''} />
                  <figcaption>Pride of Madeira</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Go forth and garden.
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
