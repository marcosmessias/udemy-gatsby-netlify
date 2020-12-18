import React from 'react';
import Profile from '../Profile';
import * as Style from './styled';

import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
  <Style.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </Style.SidebarWrapper>
);

export default Sidebar;
