import React from 'react';
import { Menu } from '@material-ui/core';

import { RightMenu } from './RightMenu';

interface Props {
  mobileAchorEl: null | HTMLElement;
  id: string;
  open: boolean;
  onClose: () => void;
  handleMenuProfileOpen: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MobileMenu: React.FC<Props> = props => {
  return (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      anchorEl={props.mobileAchorEl}
      open={props.open}
      id={props.id}
      onClose={props.onClose}
      keepMounted
    >
      <RightMenu handleMenuProfileOpen={props.handleMenuProfileOpen} />
    </Menu>
  );
};
