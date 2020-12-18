/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import * as Style from './styled';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import { TransitionPortal } from 'gatsby-plugin-transition-link';

const Layout = ({ children }) => {
  return (
    <Style.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <Style.LayoutMain>{children}</Style.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </Style.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
