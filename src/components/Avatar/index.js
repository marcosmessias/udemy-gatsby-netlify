import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Style from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return <Style.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
