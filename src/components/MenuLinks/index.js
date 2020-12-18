import React from 'react';

import links from './content';
import getThemeColor from '../../utils/getThemeColor';

import * as Style from './styled';

const MenuLinks = () => (
  <Style.MenuLinksWrapper>
    <Style.MenuLinksList>
      {links.map((link, i) => {
        return (
          <Style.MenuLinksItem key={i}>
            <Style.MenuLinksLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </Style.MenuLinksLink>
          </Style.MenuLinksItem>
        );
      })}
    </Style.MenuLinksList>
  </Style.MenuLinksWrapper>
);

export default MenuLinks;
