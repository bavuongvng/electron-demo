import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, IconButton, Badge } from '@material-ui/core';
import { Mail as MailIcon, Notifications, AccountCircle } from '@material-ui/icons';

import { rightMenuStyles } from './styles';

interface Props {
  handleMenuProfileOpen: (e: React.MouseEvent<HTMLElement>) => void;
}

export const RightMenu: React.FC<Props> = props => {
  const classes = rightMenuStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <MenuItem className={classes.menuItem}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p className={classes.menuLabel}>{t('Message')}</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <p className={classes.menuLabel}>{t('Notifications')}</p>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={props.handleMenuProfileOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p className={classes.menuLabel}>{t('Profile')}</p>
      </MenuItem>
    </React.Fragment>
  );
};
