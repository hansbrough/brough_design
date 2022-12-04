import React, { useState, useContext } from 'react';
import * as styles from './pdp.module.css';
import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import SizeList from '../../components/SizeList';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';
import { generateMockProductData } from '../../helpers/mock';
import { getCollectionItemData } from '../../helpers/localFetch';
import Icon from '../../components/Icons/Icon';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const PdpPage = (props) => {
  const { location } = props;
  const image = location?.state?.image;
  const imageAlt = location?.state?.imageAlt;
  const slug = location?.state?.slug;
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'sample')[0];
  const pdpItem = getCollectionItemData(slug);

  const [qty, setQty] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);


  return pdpItem && (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: 'Gallery', link: '/gallery' },
              { label: `${pdpItem.category}`, link: `/gallery/${pdpItem.category}` },
              { label: `${slug}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.pdpHero}>
              {pdpItem?.image && <img src={pdpItem.image} alt={pdpItem.title}></img>}
            </div>
            <div className={styles.details}>
              <h1>{pdpItem.title}</h1>
              <span className={styles.vendor}> in {pdpItem.location}</span>

              {/*
              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                  >
                    Add to Bag
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
              </div>
              */}

              <div className={styles.description}>
                <p>{pdpItem.description}</p>
              </div>

              <div className={styles.informationContainer}>
                {pdpItem.plants &&
                  <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'Plants used'}
                  >
                    <p className={styles.information}>
                      {pdpItem.plants.join(", ")}
                    </p>
                  </Accordion>
                }
                {pdpItem.materials &&
                  <Accordion
                    type={'plus'}
                    customStyle={styles}
                    title={'Materials'}
                  >
                    <p className={styles.information}>
                      {pdpItem.materials.join(", ")}
                    </p>
                  </Accordion>
                }
                {pdpItem.care &&
                  <Accordion
                    type={'plus'}
                    customStyle={styles}
                    title={'Care'}
                  >
                    <p className={styles.information}>
                      {pdpItem.care}
                    </p>
                  </Accordion>
                }
              </div>
            </div>
          </div>
        </Container>


      </div>
    </Layout>
  );
};

export default PdpPage;
