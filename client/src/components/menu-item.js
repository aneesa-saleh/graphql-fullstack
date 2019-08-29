import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';
import { colors, unit } from '../styles';

export const menuItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: 'inherit',
  fontSize: 15,
  color: 'white',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  textAlign: 'center',
  svg: {
    width: 30,
    margin: `0 auto`,
    fill: 'rgb(173, 120, 214)',
  },
});

const MenuItem = styled(Link)(menuItemClassName, {
  textDecoration: 'none',
});

export default MenuItem;

export const MenuItemTitle = styled('span')({
  display: 'inline-block',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  marginLeft: '10px'
});
