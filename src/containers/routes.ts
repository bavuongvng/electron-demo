import { RouteProps } from 'react-router-dom';

import { Login, Register, NotFound, Dashboard, About, Home } from '../screens';
import { AppMaps } from './AppMaps';

export const publicRoutes: RouteProps[] = [
  { path: AppMaps.Login, component: Login, exact: true },
  { path: AppMaps.Register, component: Register, exact: true },
  { path: AppMaps.NotFound, component: NotFound, exact: true },
];

export const privateRoutes: RouteProps[] = [
  { path: AppMaps.Home, component: Home, exact: true },
  { path: AppMaps.About, component: About, exact: true },
  { path: AppMaps.Dashboard, component: Dashboard, exact: true },
];
