import React from 'react';
import styled from 'react-emotion';
import { useApolloClient } from '@apollo/react-hooks';

import { menuItemClassName, MenuItemTitle } from '../components/menu-item';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';

export default function LogoutButton() {
  const client = useApolloClient();
  return (
    <StyledButton
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false }});
        localStorage.clear();
      }}
    >
      <ExitIcon />
      <MenuItemTitle>Logout</MenuItemTitle>
    </StyledButton>
  );
}

const StyledButton = styled('button')(menuItemClassName, {
  marginLeft: 30,
  background: 'none',
  border: 'none',
  padding: 0,
  ':hover': {
    cursor: 'pointer'
  }
});
