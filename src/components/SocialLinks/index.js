import React from 'react';

import Icons from './icons';
import links from './content';

import * as Style from './styled';

const SocialLinks = () => (
  <Style.SocialLinksWrapper>
    <Style.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label];

        return (
          <Style.SocialLinksItem key={i}>
            <Style.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Style.IconWrapper>
                <Icon />
              </Style.IconWrapper>
            </Style.SocialLinksLink>
          </Style.SocialLinksItem>
        );
      })}
    </Style.SocialLinksList>
  </Style.SocialLinksWrapper>
);

export default SocialLinks;
