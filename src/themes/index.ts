import { createMuiTheme, Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import { theme } from './theme';

const mergeOptions = (options: ThemeOptions): Theme =>
  createMuiTheme({
    ...options,
  });

export default mergeOptions(theme);
