import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  ${media.lessThan('large')`
    height: auto;
    padding: 0;
    width: 100%;
    bottom: 0;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.list,
  &.grid {
    ${media.lessThan('large')`
      display: none;
    `}
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`;
