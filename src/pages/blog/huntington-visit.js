import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const BlogPostPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'Travel'}
              title={'Huntington Botanical Gardens'}
              image={'/blogs/huntington-visit/IMG_7260.jpg'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  I recently stopped by the Huntington Gardens in Pasadena, CA for the first time after what seems like years of reading about the trips of others.
                  I was truly surprised by the size of the grounds and variety of plants across the many themed gardens!
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7292.JPG'} alt={'Entrance Alley'} />
                  <figcaption>Entrance Alley</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The Huntington is like Disneyland for plant aficionados - complete with a 'Main Street".
                  Along both sides of this alley are many patios for small groups, families or just individuals to relax.
                  I thought it was a brilliant idea!
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7290.JPG'} alt={'One of many alcove patios offering privacy'} />
                  <figcaption>One of many alcove patios offering privacy</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7288.JPG'} alt={'Lots of treasures in the alcove patios'} />
                  <figcaption>Lots of treasures in the alcove patios</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7283.JPG'} alt={'Large pot filled with many plants'} />
                  <figcaption>We all need a garden pot filled with plants liek this one!</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  At end of the entrance alley is a rill with paths on either side leading visitors toward the heart of the botanical gardens.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7281.JPG'} alt={'View from the top of the rill'} />
                  <figcaption>View from the top of the rill</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7276.JPG'} alt={'View from the bottom of the rill'} />
                  <figcaption>View from the bottom of the rill</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7275.JPG'} alt={'Aloe and grass meadow near the entrance'} />
                  <figcaption>Aloe and grass meadow near the entrance</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Of course I was looking forward to the Desert Garden in a big way but I truly enjoyed walking through the rest of the gardens as well.
                </p>
                <p className={styles.blogParagraph}>
                  There was a lot to be inspired by in the Desert Garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7073.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  There were magic spots hidden throughout the garden.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7130.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7133.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  The collector in me found many plants to admire.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7223.JPG'} alt={'Euphorbia grandialata'} />
                  <figcaption>Euphorbia grandialata</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7245.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  There's something to be said for mass planting.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7268.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7258.JPG'} alt={'grid of golden barrel cactus and artichoke agave'} />
                  <figcaption>Grid of golden barrel cactus and artichoke agave</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Most of the Desert Garden feels like a "collectors garden" which is what you would expect of a botanical garden... a few of everything.
                  There are a few sections (like the above and below shots) that look as if a designer had some input.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7248.JPG'} alt={'Snowy looking mammillaria species dot hillside'} />
                  <figcaption>Snowy looking mammillaria species dot hillside</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7265.JPG'} alt={'Notocactus magnificus'} />
                  <figcaption>Notocactus magnificus</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7135.jpg'} alt={'cleistocactus borzicactus'} />
                  <figcaption>Cleistocactus borzicactus</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7137.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7128.jpg'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7121.jpg'} alt={'Fouquieria columnaris "Boojum Tree"'} />
                  <figcaption>Fouquieria columnaris "Boojum Tree</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7120.JPG'} alt={'Close up of "Boojum Tree" leaves'} />
                  <figcaption>Close up of "Boojum Tree" leaves</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7262.JPG'} alt={'Boojum Tree catching the last rays of light'} />
                  <figcaption>Boojum Tree catching the last rays of light</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  If I get the chance I'll plant a few of these Boojum trees in my front yard!
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7328.JPG'} alt={'Enchanted hour in a cactus grove'} />
                  <figcaption>Enchanted hour in a cactus grove</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  It was mid November when I took these pictures which means lots of dramatic lighting was free for all.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7329.JPG'} alt={'Yucca filifera'} />
                  <figcaption>Yucca filifera</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7126.JPG'} alt={'pachycereus pringlei'} />
                  <figcaption>pachycereus pringlei</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7324.JPG'} alt={'Oreocereus celsianus "Old man of the Andes"'} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7330.jpg'} alt={'A very tall Echinopsis terscheckii'} />
                  <figcaption>Oreocereus celsianus "Old man of the Andes"</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7236.JPG'} alt={'Aloe bainesi (Aloe barberae)'} />
                  <figcaption>Aloe bainesi (Aloe barberae)</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7318.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  There seemed to be a lot of intriguing, off limit paths such as the one above - not to mention several older parts of the Desert Garden closed for renovation.
                </p>

                <h2 className={styles.blogSubHeader}>Aloes</h2>

                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7099.JPG'} alt={'Aloe principis cuttings'} />
                  <figcaption>Aloe principis cuttings</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Each of these cuttings was around 4 ft long and could have made small trees! They were headed for the mulcher.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7094.JPG'} alt={'Vary mature Aloe ferox X A. microstigma'} />
                  <figcaption>Vary mature Aloe ferox X A. microstigma</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7074.JPG'} alt={''} />
                  <figcaption></figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7091.jpg'} alt={'Aloe reitzii'} />
                  <figcaption>Aloe reitzii</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7199.JPG'} alt={'Aloe sabae'} />
                  <figcaption>Aloe sabae</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7171.JPG'} alt={'Looks like a very mature Aloe ferox'} />
                  <figcaption>Looks like a very mature Aloe ferox</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7188.JPG'} alt={'Aloe tomentosa X A. secundiflora'} />
                  <figcaption>Aloe tomentosa X A. secundiflora</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7150.JPG'} alt={'Aloe mitriformis "Mitre Aloe"'} />
                  <figcaption>Aloe mitriformis "Mitre Aloe"</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7198.JPG'} alt={'Aloe framesii'} />
                  <figcaption>Aloe framesii</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7141.JPG'} alt={'Aloe cryptopoda'} />
                  <figcaption>Aloe cryptopoda</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Always good to see a friend in the garden and compare it to my own specimens growing back home.
                </p>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7143.JPG'} alt={'Aloe cryptopoda in bloom'} />
                  <figcaption>Aloe cryptopoda in bloom</figcaption>
                </figure>
                <figure className={styles.imageContainer}>
                  <img className={styles.heightFit} src={'/blogs/huntington-visit/IMG_7227.JPG'} alt={'Aloe tororoana in bloom'} />
                  <figcaption>Aloe tororoana in bloom</figcaption>
                </figure>
                <p className={styles.blogParagraph}>
                  Aloe tororoana is completely new to me. What caught my attention was the red blooms and thin, dark, reddish brown stems. Had they not been in bloom I probably would have walked right past them.
                </p>
                <p className={styles.blogParagraph}>
                  I took a lot of pictures - but too much of a good thing can get old. I have to admit that after walking through the gardens for hours I felt a bit overwhelmed. There is definately enough to keep you busy for an entire day - but you might be exausted at the end. I broke my visit into 2 half days - not on purpose but it ended up being a happy accident.
                </p>
                <p className={styles.blogParagraph}>
                  Until next time - hans
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
