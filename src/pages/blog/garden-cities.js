import React from 'react';
import * as styles from './blogpost.module.css';

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
                  The views, like the streets, are wide and the mountains helped this wandering, first time visitor with orientation.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6935.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  These shots are perhaps not the best for a 1 to 1 comparison but for me the below image captures the spirit of Savannah's historic district. The streets, sidewalks and footpaths in Savannah felt human scale. This is a walking city.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_172723.jpg'} alt={'Forsyth Park'} />
                </div>
                <p className={styles.blogParagraph}>
                  After 150+ years of growth the oaks have created a canopy over many of the streets which fosters a real sense of enclosure.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_170727.jpg'} alt={'Savannah streets covered by a canopy of oaks.'} />
                </div>
                <p className={styles.blogParagraph}>
                  Depending on where I walked in Palm Springs there were varying amounts of street trees. Of course the climate of Palm Springs is vastly different so the final effect cannot be the same as Savannah.
                  Palm Springs is not a place that can support the verdant look of Savannah but it embraces it's own sense of place.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6955.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  Of course Palm Springs is a new city compared to Savannah. Look how fresh these sidewalks below appear - they could have been installed the week before I took this shot!
                  Not many people were out walking during my trip - maybe that's why the sidewalks look so clean?
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6933.jpg'} alt={'Typical Palm Springs residential streetscape'} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_171037.jpg'} alt={'Typical sidewalk in the historic area of Savannah'} />
                </div>
                <p className={styles.blogParagraph}>
                  Both cities played host to famous architects working on what was for the time cutting edge design. In fact the buildings and history of both cities have inspired a cottage industry of architectural tours.
                  I was lucky enough to take a guided architectural tour of both cities! Each was very interesting - although one was on foot while the other was by bus (I'll let you guess which was which)
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_144440.jpg'} alt={'Kehoe House 1892'} />
                </div>
                <p className={styles.blogParagraph}>
                  Notice how prominent a role the car port and driveway play in the Butterfly House below?
                  The residences above and below were built just 60 years apart but of course a lot changed in those years.
                  This older part of Savannah is urban - Palm Springs is undeniably suburban which means gardeners are handed a different set of constraints and opportunities.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6968.jpg'} alt={'The "Butterfly House" 1957 - Architect William Krisel'} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6967.jpg'} alt={'A "Mid-Century Modern" garden'} />
                </div>
                <p className={styles.blogParagraph}>
                  Above is the front garden of the 'Butterfly House" unabashedly displaying a modernist approach complete with metal bowls of colored glass.
                  It's dusk in this shot and the colored, accent lighting can just be seen. The lights remind me of the landscape in front of an old drive-in movie theater. In a way this front yard is itself a bit of theater. The space is all out abstract minimalism.
                  I'm guessing the clean lines are meant to complement the house.
                </p>
                <p className={styles.blogParagraph}>
                  Because of the original city layout, many houses in Savannah have small or non-existent front yards when compared to Palm Springs.
                  This is one of the constraints that makes Savannah unique. The spaces are small but the attention to detail and layering of materials leads to a visually rich experience.
                  Working within design constraints leads to unique spaces which is why we travel - to see something different.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_172315.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  The Savannah aesthetic is not the same animal as the Palm Springs aesthetic. It's easy to appreciate both styles without thinking about one being better than the other -  both places just solve a different set of challenges.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_172215.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  Palm Springs seems to announce "this where the cars enter" while the homes in Savannah announce "this is where the humans enter".
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6972.jpg'} alt={''} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6973.jpg'} alt={'A suburban desert landscape at dusk'} />
                </div>
                <p className={styles.blogParagraph}>
                  Many of the gardens in both cities felt highly structured.
                  Palm Springs with it's mid century modern aesthetic skewed more heavily toward imposing an artificial order on the landscape.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_165357.jpg'} alt={'A sizable, and relatively rare, residential garden in Savannah'} />
                </div>
                <p className={styles.blogParagraph}>
                  There were some notable exceptions like the famous Kaufman house in Palm Springs by Architect Richard Neutra.
                  These boulder piles are not unlike the natural environment near the foot of the adjacent San Jacinto Mountains.
                  A modern house sitting in a natural landscape is what made this my personal fav of the trip.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/kaufman.jpg'} alt={'kaufman house'} />
                </div>
                <p className={styles.blogParagraph}>
                  Residential gardens seemed fewer and smaller over all in Savannah's historic neighborhoods. This makes sense given the cities original layout which emphasized tight clusters of buildings arranged around neighborhood squares.
                  Those gardens that do exist are directly adjacent to sidewalks and commonly guarded by walls (and decorative finials).
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_170804.jpg'} alt={''} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_170841.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  The garden above looks like it grew out of a portion of a row house which was removed. Space is at a premium!
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_171619.jpg'} alt={'Mysterious garden entry'} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_173518.jpg'} alt={''} />
                </div>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_171814.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  I just noticed the oyster shells individually pressed into the courtyard pavement.
                  Shells like these are common ingredient in many of the areas sidewalks as well.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/20220414_171824.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  Just a few steps from the sidewalk and we are in another world
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6956.jpg'} alt={''} />
                </div>
                <p className={styles.blogParagraph}>
                  Not to be outdone - Palm Springs also has no shortage of beautiful houses and inviting front spaces. There are few key differences that contribute to a different experience: no sidewalks, generous open spaces in front of the home, lack of broad leaf plants, very little articulation on the buildings. Of course there is lots of variation between neighborhoods in Palm Springs.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6943.jpg'} alt={'Apartment building front landscape in Palm Springs'} />
                </div>
                <p className={styles.blogParagraph}>
                  Sometimes quite unexpectedly beauty just pops out of nowhere. My visit to Palm Springs was during November while the temperatures sat at a very pleasant 80 degrees. The sun sliced through the sky at a relatively low angle creating some spectacular views in the morning and late afternoon as it highlighted the ridges and draws of the mountains in the background.
                </p>
                <div className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/garden-cities/IMG_6938.jpg'} alt={'Planting on a residential street corner in Palm Springs'} />
                </div>
                <p className={styles.blogParagraph}>
                  There may not be nearly as many public green spaces in Palm Springs but it's not hard to bump into some nice installations while on a walk.
                </p>
                <p className={styles.blogParagraph}>
                  Because Savannah has a much longer history of western architecture and public spaces there are simply more layers to experience but cities have an iconic sense of place because they've responded to unique environmental and historical circumstances. I'm convinced that it's their uniqueness which helps to make both Savannah and Palm Springs popular destinations.
                </p>
                <p className={styles.blogParagraph}>
                  Happy Garden City Touring!
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
