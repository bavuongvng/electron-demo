import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const rightMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuItem: {
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        height: 'auto',
        padding: 0,
        margin: 0,
        '&:hover': {
          backgroundColor: 'inherit',
        },
      },
    },
    menuLabel: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);
