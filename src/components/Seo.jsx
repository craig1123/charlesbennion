import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import metaData from '../consts/metaData';

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
        language
        siteUrl
        twitter
      }
    }
  }
`;

const SiteMetadata = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { siteUrl, title, description, language, author },
      },
    }) => {
      const metaTitle = newTitle || title;
      return (
        <Helmet defaultTitle={metaTitle}>
          <html lang={language} />
          <meta name="theme-color" content="#333" />
          <meta name="description" content={description} />
          <meta name="keywords" content="Charles Bennion, piano, pianist, indie, composer, artist, music" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={author} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <link rel="canonical" href={siteUrl} /> */}
        </Helmet>
      );
    }}
  />
);

export default SiteMetadata;
