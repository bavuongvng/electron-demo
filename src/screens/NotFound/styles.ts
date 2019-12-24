import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      verticalAlign: 'center',
      marginTop: theme.spacing(5),
    },
  }),
);
