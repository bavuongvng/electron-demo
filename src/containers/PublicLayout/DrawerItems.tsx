import React from 'react';
import { Home as HomeIcon, Contactless } from '@material-ui/icons';

import { DrawerItem } from '../../components';
import { AppMaps } from '../AppMaps';

export const drawerItemsPublic: DrawerItem[] = [
  {
    name: 'Login',
    path: AppMaps.Login,
    icon: <HomeIcon />,
  },
  {
    name: 'Register',
    path: AppMaps.Register,
    icon: <Contactless />,
  },
];
