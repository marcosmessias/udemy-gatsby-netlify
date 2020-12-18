import React, { useEffect, useState } from 'react';

import * as Style from './styled';

import getThemeColor from '../../utils/getThemeColor';

import { Home } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular';
import { LightBulb as Light } from 'styled-icons/heroicons-outline';
import { Grid } from 'styled-icons/boxicons-solid';
import { ListUl } from '@styled-icons/boxicons-regular/ListUl';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListkMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <Style.MenuBarWrapper>
      <Style.MenuBarGroup>
        <Style.MenuBarLink
          to="/"
          title="Voltar para Home"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
        >
          <Style.MenuBarItem>
            <Home />
          </Style.MenuBarItem>
        </Style.MenuBarLink>
        <Style.MenuBarLink
          to="/search"
          title="Pesquisar"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
        >
          <Style.MenuBarItem>
            <Search />
          </Style.MenuBarItem>
        </Style.MenuBarLink>
      </Style.MenuBarGroup>
      <Style.MenuBarGroup>
        <Style.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </Style.MenuBarItem>
        <Style.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListkMode ? 'grid' : 'list');
          }}
          className={display}
        >
          {isListkMode ? <ListUl /> : <Grid />}
        </Style.MenuBarItem>
        <Style.MenuBarItem title="Ir para o topo">
          <Arrow />
        </Style.MenuBarItem>
      </Style.MenuBarGroup>
    </Style.MenuBarWrapper>
  );
};
export default MenuBar;
