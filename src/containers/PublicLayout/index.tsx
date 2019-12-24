import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProps, Route, Switch, Redirect } from 'react-router-dom';

import { AppBar, Drawer } from '../../components';
import { drawerItemsPublic } from './DrawerItems';
import { AppMaps } from '../AppMaps';

interface Props {
  routes: RouteProps[];
  isAuth: boolean;
  setAuthen: (auth: boolean) => void;
}

const PublicLayout: React.FC<Props> = props => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const onMenuClose = React.useCallback(() => {
    setMenuOpen(false);
  }, []);
  const onMenuOpen = React.useCallback(() => {
    setMenuOpen(true);
  }, []);
  return props.isAuth ? (
    <Redirect to={AppMaps.Dashboard} />
  ) : (
    <Fragment>
      <div>
        <AppBar onMenuOpen={onMenuOpen} label={t('Admin app')} />
        <Drawer onMenuClose={onMenuClose} open={menuOpen} drawerItems={drawerItemsPublic} />
        <button onClick={() => props.setAuthen(true)}>Login</button>
        <Switch>
          {props.routes.map(route => (
            <Route key={`${route.path}`} {...route} />
          ))}
        </Switch>
      </div>
    </Fragment>
  );
};

export { PublicLayout };
