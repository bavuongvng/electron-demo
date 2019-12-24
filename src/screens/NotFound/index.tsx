import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

const NotFound: React.FC = () => {
  const classese = useStyles();

  return (
    <div className={classese.root}>
      <Typography variant="h2" align="center" display="block">
        404 - Not Found
      </Typography>
    </div>
  );
};

export { NotFound };
