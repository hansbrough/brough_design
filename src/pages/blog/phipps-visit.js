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
                  Recently we dropped off one of the kids at university in Pittsburgh.
                  Coincidentally right next store is the Phipps Conservatory which is home to 14 interconnected glass houses and assorted green spaces between and around the buildings. 
                </p>
                <p className={styles.blogParagraph}>
                  I don't have a picture of the entrance so let's start in the middle with a shot that shows one of the incredible glass houses.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6653.jpg'} alt={'Inside the Japanese Garden'} />
                  <figcaption>Inside the Japanese Garden</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6651.jpg'} alt={'Bonsai trees planted as long ago as 1960'} />
                  <figcaption>Bonsai trees planted as long ago as 1960</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6655.jpg'} alt={'Unknown small conifer with variegated needles'} />
                  <figcaption>Unknown small conifer with variegated needles</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  My favorite aspect of the conservatory was surprisingly not the plants but details like the entryway below.
                  Phipps Conservatory was opened in 1893 and I can't help but think that some of it's more interesting Victorian era details wouldn't be built today.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6670.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6666.jpg'} alt={'Victorian era concrete vase'} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6671.jpg'} alt={'Air vent with lots of articulation'} />
                  <figcaption>Air vent with lots of articulation</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The above is a small detail that just wouldn't be built today if for no other reason than cost.
                  I suppose 100+ yrs ago the dollar went a little further and we had an abundance of crafts people to make it happen.
                  It seems like a piece of art to me.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6602.jpg'} alt={'Modern art in the garden'} />
                  <figcaption>Modern art in the garden</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6673.jpg'} alt={'One of many pots stashed in corners, bursting with plants'} />
                  <figcaption>One of many pots stashed in corners, bursting with plants</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The shots of these bromeliads are a little out of order and actually live in different glass houses.
                  The plants below live in the Tropical Forest Conservatory which was my second fav spot.
                  My picture don't do it justice however so they are not included.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6688.jpg'} alt={'bromeliads'} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Each glass house holds a different theme. Through the archway below is the Sunken Garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6607.jpg'} alt={'Entrance to the Sunken Garden'} />
                  <figcaption>Entrance to the Sunken Garden greenhouse</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6609.jpg'} alt={'The Phipps Sunken Garden'} />
                  <figcaption></figcaption>
                </figure>

                <h2 className={styles.blogSubHeader}>The Desert Garden</h2>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6623.jpg'} alt={'The Desert Room was opened in 1902'} />
                  <figcaption>The Desert Room was opened in 1902</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Many of the plants in this room were not 'desert' plants - but they certainly couldn't grow outdoors year round in the Pittsburgh climate.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6624.jpg'} alt={'Aloe ferox'} />
                  <figcaption>Aloe ferox</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6628.jpg'} alt={'Tortoise Shell Yam (Dioscorea macrostachya)'} />
                  <figcaption>Tortoise Shell Yam (Dioscorea macrostachya)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6631.jpg'} alt={'Carrion Plant (Stapelia gigantea)'} />
                  <figcaption>Carrion Plant (Stapelia gigantea)</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Should I be disappointed that this Carrion Plant was not in flower during my visit? Not sure. I believe the 'gigantea' name comes from the large fleshy flower.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6635.jpg'} alt={'Euphorbia Species'} />
                  <figcaption>Euphorbia Species</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I didn't catch the species the above Euphonia - it doesn't look like an "Ingens". For context this plant stands about 14ft tall.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6637.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6641.jpg'} alt={'Oyster Plant'} />
                  <figcaption>Oyster Plant from Southern Mexico and further south</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit//IMG_6642.jpg'} alt={'Ball Cactus (Parodia magnifica)'} />
                  <figcaption>Ball Cactus (Parodia magnifica)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit//IMG_6647.jpg'} alt={'African Tree Grape (Cyphostemma bainesii)'} />
                  <figcaption>African Tree Grape (Cyphostemma bainesii)</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I'd sure like to grow one of these at home.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6649.jpg'} alt={'close up of African Tree Grape (Cyphostemma bainesii)'} />
                  <figcaption>African Tree Grape leaves closer up</figcaption>
                </figure>

                <h2 className={styles.blogSubHeader}>The Gallery Room</h2>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6662.jpg'} alt={'The Phipps Gallery Room Greenhouse'} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  This greenhouse looked to be a space for seasonal displays.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6659.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Notice the liberal use of Coleus? It's not just here - all over downtown Pittsburgh are large potted arrangements that included Coleus.
                  It was growing so big it appeared like Hydrangea.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6658.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Seems having indoor furniture placed outdoors with plants growing on or in them is popular now.
                  In this case the furniture is still indoors but it looks like it's outdoors.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6660.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6661.jpg'} alt={'Giant rodent rampaging through the veggie patch'} />
                  <figcaption>Giant rodent rampaging through the veggie patch</figcaption>
                </figure>

                <h2 className={styles.blogSubHeader}>The Broderie Room</h2>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6618.jpg'} alt={'Parterre de Broderie'} />
                  <figcaption>Parterre de Broderie</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The French word "broderie" translates to "embroidery" which describes the aesthetic of the parterre garden pictured above.
                  Not seeing it? Imagine the sheared hedge forms as thread woven into the garden floor.
                  I have to admit this was not my favorite room but I appreciate the historical significance.
                  This style of garden design came from a time when nature was considered a force to be tamed.
                </p>

                <h2 className={styles.blogSubHeader}>Center for Sustainable Landscapes</h2>
                <p className={styles.blogParagraph}>
                  Out the back of the largest, most modern glass house was a terrace which turned out to be my favorite garden area.
                  This section also includes several supporting buildings dedicated to the study of sustainable landscapes.
                  If your interested in learning more visit the official Phipps Conservatory CSL web page.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6733.jpg'} alt={'View of "Froggy Bottom" from a nearby green roof'} />
                  <figcaption>View of "Froggy Bottom" from a nearby green roof</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  We lucked out and had the whole place to ourselves that Friday afternoon.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6717.jpg'} alt={'View of "Froggy Bottom" from a nearby green roof'} />
                  <figcaption>Froggy Bottom Pond in the Summer</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Nearby signage also called this area 'Turtle Lagoon" so I'm sure what the official name is for the pond - I like both versions!
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6711.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Within the pond were lots of fish which included Blue Gill, Spotted Bass, PumpkinSeed as well as crayfish, turtles and frogs.
                  The pond is a rain water collection basin for reuse around the conservatory.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6715.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6706.jpg'} alt={'A view to the Tropical Forest Conservatory'} />
                  <figcaption>A view to the Tropical Forest Conservatory</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6700.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I liked how the top of this retaining wall looks like a path through a dense wall of green. All this green is very different from my home town.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6701.jpg'} alt={'The Path that draws the garden visitor onward'} />
                  <figcaption>The Path that draws the garden visitor onward</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6726.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6725.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                The building at the top of the path has a green roof - we went to check it out.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6727.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6731.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/phipps-visit/IMG_6735.jpg'} alt={'Phipps Conservatory Production Greenhouse'} />
                  <figcaption>Phipps Conservatory Production Greenhouse</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The gigantic, working greenhouse in the background looks like a place I'd appreciate a peak at - of course it's the one place not open to visitors. 
                </p>
                <p className={styles.blogParagraph}>
                  About 30 seconds after taking this shot my camera ran out of power :(  Phipps seems like a true asset for the community; I'm a fan.
                  Given that here in Northern California we are experiencing yet another hot, dry, smoke filled Summer, spending time in humid Pittsburgh was a nice change of pace.
                </p>
                <p className={styles.blogParagraph}>
                  There's a lot more to see at the conservatory than I've shown so if you're in the area I highly suggest a visit.
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
