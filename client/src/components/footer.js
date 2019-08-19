import React from 'react';
import styled from 'react-emotion';

import MenuItem, { MenuItemTitle } from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import { colors, unit } from '../styles';

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">
          <HomeIcon />
          <MenuItemTitle>Home</MenuItemTitle>
        </MenuItem>
        <MenuItem to="/cart">
          <CartIcon />
          <MenuItemTitle>Cart</MenuItemTitle>
        </MenuItem>
        <MenuItem to="/profile">
          <ProfileIcon />
          <MenuItemTitle>Profile</MenuItemTitle>
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'rgba(255,255,255,0.9)',
  color: colors.textSecondary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 1.5,
  margin: '0 auto',
});
