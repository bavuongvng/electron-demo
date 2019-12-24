import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

const Login: React.FC = () => {
  const classese = useStyles();

  return (
    <div className={classese.root}>
      <Typography variant="h2" align="center" display="block">
        Login Screen
      </Typography>
    </div>
  );
};

export { Login };
