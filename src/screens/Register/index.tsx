import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

const Register: React.FC = () => {
  const classese = useStyles();

  return (
    <div className={classese.root}>
      <Typography variant="h2" align="center" display="block">
        Register Screen
      </Typography>
    </div>
  );
};

export { Register };
