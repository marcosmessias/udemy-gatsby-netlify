import React from 'react';
import propTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as Style from './styled';

const RecommendedPosts = ({ next, previous }) => (
  <Style.RecommendedWrapper>
    {previous && (
      <Style.RecommendedLink
        to={previous.fields.slug}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        className="previous"
      >
        {previous.frontmatter.title}
      </Style.RecommendedLink>
    )}
    {next && (
      <Style.RecommendedLink
        to={next.fields.slug}
        cover
        direction="left"
        bg="#16202c"
        duration={0.6}
        className="next"
      >
        {next.frontmatter.title}
      </Style.RecommendedLink>
    )}
  </Style.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fileds: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fileds: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
