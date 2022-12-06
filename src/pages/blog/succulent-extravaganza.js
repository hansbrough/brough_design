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
              category={'Plant Shows and Sales'}
              title={'Succulent Extravaganza'}
              image={'/blogs/succulent-extravaganza/IMG_3085.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  I woke up early yesterday morning and hit the road for what turned out to be a beautiful day in Castroville, CA at Succulent Gardens.
                  This time of year of course means it's time for the Succulent Extravaganza where all of us succulent fanatics come to admire the gardens, listen to celebrity speakers and take home treasure!
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/SG_entrance.JPG'} alt={'Entrance to Succulent Gardens'} />
                  <figcaption>Entrance to Succulent Gardens</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Saturday morning started at 8am with an early birds tour of the demonstration gardens with Brian Kemble who you may recognize from the Ruth Bancroft Garden. Ok, admittedly despite my best efforts I missed the first 20 minutes of his tour. It was shaping up to be a beautiful day but as you can see by the jackets it was still a bit chilly at 8:30am.
                  Don't let this picture fool you - he was speaking to a crowd of at least 50 people.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3078.JPG'} alt={'Brian Kemble Curator at the Ruth Bancroft Garden'} />
                  <figcaption>Brian Kemble Curator at the Ruth Bancroft Garden</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  We started along the side of the site where there are a few large beds of mature specimen plants. I loved seeing bigger, more mature versions of the plants in my yard in this section of the garden.
                  Honestly I appreciated them much more than my last visit a few years ago prior to having these same plants in my own yard.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3081.JPG'} alt={'Aloe vaombe roughly 5ft tall'} />
                  <figcaption>Aloe vaombe (roughly 5' tall)</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Brian's tour ran down what I'd describe as the 'front side' of the nursery.
                  Because of all the mature Aloe's it's safe to say this is my favorite section of the garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3084.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3085.JPG'} alt={'Aloe vanbalenii planted in the ground'} />
                  <figcaption>Aloe vanbalenii aka "Octopus Aloe"</figcaption>
                </figure>
                <p className={styles.blogParagraph}>

                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3093.JPG'} alt="Requisite Agave 'Blue Flame'" />
                  <figcaption>Requisite Agave 'Blue Flame' close up</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3096.JPG'} alt={'Medusa Euphorbia'} />
                  <figcaption>Euphorbia "Medusa Head" (I think...)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3088.JPG'} alt="Agave potatorum 'Kisso Khan'" />
                  <figcaption>Agave potatorum "Kisso Khan"</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Big, mature, Agave potatorum, Aloe attenuata and Aloe Hercules in the picture below compose a typical vignette found around many a corner at Succulent Gardens.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3102.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3141.JPG'} alt="Agave atennuata 'Ray of Light'" />
                  <figcaption>Agave atennuata 'Ray of Light'</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  It might be hard to tell from the picture below but this Agave bracteosa is a very large specimen; I'm guessing it stood between 3' to 4' tall.
                  This plant is coated in a layer of dust but you can still make out the variegation which normally would make it pop out from the background plants.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3101.JPG'} alt={'Agave bracteosa'} />
                  <figcaption>Agave bracteosa "Mateo"</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  And then I saw this ... another bracteosa but in a 24" box! It looks like it has long term plans to stay in this container.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3105.JPG'} alt={'Agave bracteosa'} />
                  <figcaption>Agave bracteosa</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3107.JPG'} alt={'Barrel Cactus'} />
                  <figcaption>Golden Barrel Cactus</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Behind the Barrel Cactus is what looks like an Agave "Blue Glow" although the leaf margins looked a bit different from the younger versions commonly available. Maybe it is closer to it's Agave ocahui  lineage or maybe it's just another plant altogether (?) What drew me in for a closer inspection was the developing flower spike.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3115.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3114.JPG'} alt={''} />
                  <figcaption>Alien babies ready to emerge and colonize Earth</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3108.JPG'} alt={'Aloe plicatilis colony'} />
                  <figcaption>Largest planting of Aloe plicatilis in the world?</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3146.JPG'} alt={'Cactus fence'} />
                  <figcaption>The back fence - a work in progress</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  After a coffee break Robin Stockwell (the original owner) gave the next talk which covered transplanting tips.
                  In this picture he's waving around what looks like an Agave guiengola "Cream Brulee" which he'd just taken out of a pot and removed many of the roots.
                  My take-away tip from this talk was - use wadded paper on top a barrel cactus when flipping it over and removing from a pot.
                  Simple but genius idea... unfortunately I just planted 5 in my backyard w/out the benefit of this tip.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3117.JPG'} alt={'Robin Stockwell founder of Succulent Gardens'} />
                  <figcaption>Robin Stockwell</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Next up was Laura Eubanks demonstrating how to create a tapestry garden to a standing room only audience.
                  I've seen her talk twice now and at both events her celebrity status was front and center.
                  Saying hello can be difficult with all her fans queuing to do the same.
                  I even overheard one woman explaining how she wanted to set up her son with Laura's daughter!
                  Understanding the mechanics of her popularity could be an entire post unto itself.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3145.JPG'} alt={'Laura Eubanks and daughter'} />
                  <figcaption>Laura Eubanks</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Now... onto a look at some of the plants for sale.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3104.JPG'} alt={'Cactus as part of a complex bartering system? Sure, why not.'} />
                  <figcaption>Cactus as part of a complex bartering system? Sure, why not.</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  One of the interesting parts of visiting a working nursery is seeing what's currently growing - or rather what landscape succulents they decided to grow a few yrs before.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3120.JPG'} alt={''} />
                  <figcaption>Agave bovicornuta (foreground) impressa and desmatiana (background)</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Outside they placed some of the larger 5 and 7 gal landscape plants. I bought a smaller 1 gal Agave bovicornuta about 18 months ago from Succulent Gardens and planted it in my front yard. It's a beautiful plant.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3119.JPG'} alt={''} />
                  <figcaption>Agave lophantha "Quadricolor" and Agave "Blue Glow" (background)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3131.JPG'} alt={''} />
                  <figcaption>Aloe vaombe in 15gal containers</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3134.JPG'} alt="Aloe 'Hercules'" />
                  <figcaption>Aloe 'Hercules' in 15 gal container</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3137.JPG'} alt={'5 gal San Pedro Cactus'} />
                  <figcaption>Everyone needs a 5 gal San Pedro Cactus</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  They of course had more than just the massive landscape succulents I've shown so far - in fact a majority of plants in the nursery are 'soft' succulents sold in 2" up to 1 gal containers. The picture below doesn't really give you a sense of the size of their retail greenhouse - for that I'd probably need a fish-eye lens.
                  As you'll see by the following pictures they did an outstanding job stocking up on and growing lots of healthy, beautiful plants for this years event.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3122.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3124.JPG'} alt={'Mangave Pineapple Express'} />
                  <figcaption>Everybody loves Mangaves! (this is "Pineapple Express")</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3121.JPG'} alt={'Haworthia cooperi'} />
                  <figcaption>Haworthia cooperi</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3130.JPG'} alt={'Haworthia fasciata'} />
                  <figcaption>Gobs of Haworthia fasciata 'Zebra Haworthia'</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3126.JPG'} alt={'Young Senecio plants'} />
                  <figcaption>A forest of young Senecio</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3127.JPG'} alt={'Young Sempervivum'} />
                  <figcaption>Young Sempervivum waiting for their own containers (not for sale)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3135.JPG'} alt={'Spiral Aloe'} />
                  <figcaption>Who says 5 gal Spiral Aloe are hard to find?</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3136.JPG'} alt={'Spiral Aloe'} />
                  <figcaption>Aloe polyphylla</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3139.JPG'} alt={'Ceramic pots for sale'} />
                  <figcaption>Need pots? They have those as well.</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_3163.JPG'} alt={'plant treasure chest'} />
                  <figcaption>Succulent Treasure box</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  I have to admit I left shortly after tacos and so missed the last couple of speakers. I meant to buy that special something but the line was 20 - 30 people deep so decided to come back and visit another day. Before leaving I did have a chance to speak with one of the new owners John Rodkin - actually I rudely intercepted him as he was about to eat his tacos. I'd read in the past that we lived in the same small town and so wanted to say hello. I was also curious why they bought the nursery; was it out of a love of plants or purely as an investment? He explained his background as a tech executive, entrepreneur and his other day job - running Samsung's startup Accelerator in San Francisco. He and his wife Meagan bought the nursery as an investment but are still playing an active role in running the business. They've hired people with the right subject matter expertise - for example a new horticulturalist. From my perspective they seem to be doing a good job and I expect that trend to continue.
                </p>

                <h2 className={styles.blogSubHeader}>2019 Update</h2>
                <p className={styles.blogParagraph}>
                  I came back for Succulent Extravaganza 2019 during the afternoon - last year I came for the morning speakers.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4627.JPG'} alt={'Janet Sluis'} />
                  <figcaption>Janet Sluis on Sunset's Western Garden Collection</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  This year we made it in time for some of the afternoon speakers. The first program after lunch was Janet Sluis who spoke on new plants from Sunset's WesternGarden Collection. As someone with a garden of Aloes, Agave and Cacti I was glad to hear someone dedicate time to companion plants.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4631.JPG'} alt={'Purple Leucadendron in 1 gal pot'} />
                  <figcaption>A Purple Leucadendron!</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4630.JPG'} alt={'Skyscaper Senecio'} />
                  <figcaption>Skyscaper Senecio</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  At first glance this looks like a normal senecio but this new, "Skyscraper" variety grows to 3+ feet! The height makes it different from other varieties like "chalksticks" in that it can planted in the mid-ground with out fear of it getting lost behind other plants.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4633.JPG'} alt={'Long line to buy plants'} />
                  <figcaption>Long line to buy plants</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Same as last year - the line to buy plants is so long that the register is out of sight. Luckily the owner came along helping people who were paying by credit card.
                </p>
                <p className={styles.blogParagraph}>
                  Next up was a tour of the production greenhouses which are only open a few times a year to the general public.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4634.JPG'} alt={''} />
                  <figcaption>Stock plants</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The above are stock plants - they are not for sale.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4637.JPG'} alt={'John Rodkin'} />
                  <figcaption>The co-owner John Rodkin conducting a tour</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4641.JPG'} alt={''} />
                  <figcaption>Sedum</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Flat after flat of sedum - any shade of pink you may need.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4643.JPG'} alt={'Fan Aloe cuttings waiting to planted'} />
                  <figcaption>Fan Aloe cuttings waiting to planted</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4644.JPG'} alt={'Production Euphorbia (for cuttings)'} />
                  <figcaption>Production Euphorbia (for cuttings)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4647.JPG'} alt="Agave guiengola 'Creme Brulee'" />
                  <figcaption>Agave guiengola 'Creme Brulee'</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4648.JPG'} alt="Aloe marlothii" />
                  <figcaption>Aloe marlothii</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4649.JPG'} alt="" />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4652.JPG'} alt="Aloe barberae" />
                  <figcaption>The guess was Aloe barberae</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  For the above and below shots I had to ask for help from Allana Childs the resident Horticulturalist.
                  What kind of tree aloes are these? Her pronouncement was most likely Aloe barberae.
                  I've only seen large specimens which almost feel like some living version of a Brutalist architecture... I like these.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4653.JPG'} alt="" />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4654.JPG'} alt="Alluaudia procera" />
                  <figcaption>Alluaudia procera</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/succulent-extravaganza/IMG_4657.JPG'} alt="Old Kumara plicatilis" />
                  <figcaption>Old Kumara plicatilis (formerly Aloe plicitilis) with an uncertain future</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  And finally this year I leave you with a question... what will become of this fan aloe? Is it destined for the scrap heap (aka compost pile) or will it be replanted a live for another few decades?
                  I'm not sure we will ever know.
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
