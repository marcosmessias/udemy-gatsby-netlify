import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: #192734;
  display: flex;
  line-height: 1.4;
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: #192734;
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan('large')`
    padding: 2rem;
  `}

  &:hover {
    background: var(--borders);
  }

  &:previous {
    border-right: 1px solid var(--borders);
  }

  &:next {
    justify-content: flex-end;
  }

  &:previous:before {
    content: '\\2192';
    margin-left: 0.5rem;
  }

  &:next:before {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
