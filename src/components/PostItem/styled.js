import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  `}

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : 'var(--highlight)'};
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    border-radius: 0;
    min-height: auto;
    min-width: auto;
    font-size: 1rem;
    padding: 0.2rem;
    margin-bottom: 0.8rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  ${media.lessThan('large')`
    margin: 0.5rem 0;
    font-size: 1.4rem;
  `}

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.2;

  ${media.lessThan('large')`
    font-size: 1rem;
    font-weight: normal;
  `}
`;
