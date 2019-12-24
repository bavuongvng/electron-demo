import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { publicRoutes, PublicLayout, PrivateLayout, privateRoutes } from './containers';
import { i18n } from './core';
import theme from './themes';

const App: React.FC = () => {
  const [isAuth, setAuth] = React.useState(false);
  const setAuthen = (auth: boolean) => {
    setAuth(auth);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <PublicLayout routes={publicRoutes} isAuth={isAuth} setAuthen={setAuthen} />
          <PrivateLayout routes={privateRoutes} isAuth={isAuth} setAuthen={setAuthen} />
        </Router>
      </MuiThemeProvider>
    </I18nextProvider>
  );
};

export default App;
