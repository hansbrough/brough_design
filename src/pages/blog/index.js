import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/blogs/succulent-extravaganza/IMG_3085.jpg'}
          title={`Succulent Extravaganza`}
          ctaLink={'read story'}
          ctaTo={'/blog/succulent-extravaganza'}
          header={'plant show'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/huntington-visit')}
            to={'/blog/huntington-visit'}
          >
            Travel
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/pescadero-gardens')}
            to={'/blog/pescadero-gardens'}
          >
            Garden Tours
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/garden-cities')}
            to={'/blog/garden-cities'}
          >
            City Planning
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
