import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import {
  Drawer as MTDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { DrawerProps } from './drawer.props';
import { useStyles } from './styles';

const renderLink = (path: string): React.FC => props => {
  return <Link {...props} to={path} />;
};

const Drawer: React.FC<DrawerProps> = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <MTDrawer
      anchor="left"
      open={props.open}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      onClose={props.onMenuClose}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.onMenuClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <div onClick={props.onMenuClose}>
        <List>
          {props.drawerItems.map(item => (
            <ListItem key={item.name} button component={renderLink(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.name)} />
            </ListItem>
          ))}
        </List>
      </div>
    </MTDrawer>
  );
};

export { Drawer };
