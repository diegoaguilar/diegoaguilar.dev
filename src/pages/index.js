import React from 'react';
import Layout from 'components/layout';
import Hero from 'components/hero';
import { graphql } from 'gatsby';

const Index = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
