import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      {/*<NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Cambridge Support</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight> */}
      <NavTitleLarge>Cambridge Support</NavTitleLarge>
    </Navbar>
    {/* Toolbar
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>*/}
    {/* Page content */}
    <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>

  </Page>
);
export default HomePage;