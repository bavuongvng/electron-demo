import React from 'react';
import { Home as HomeIcon, Contactless, DashboardRounded } from '@material-ui/icons';

import { DrawerItem } from '../../components';
import { AppMaps } from '../AppMaps';

export const drawerItemsPublic: DrawerItem[] = [
  {
    name: 'Login',
    path: AppMaps.Home,
    icon: <HomeIcon />,
  },
  {
    name: 'About',
    path: AppMaps.About,
    icon: <Contactless />,
  },
  {
    name: 'Dashboard',
    path: AppMaps.Dashboard,
    icon: <DashboardRounded />,
  },
];
