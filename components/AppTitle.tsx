'use client';

import { makeStyles } from "@mui/styles";
import colors from "@styles/colors";

interface AppTitleProps {
  title: string;
  siteName: string;
}

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'inline-flex',
    marginRight: '35px'
  },
  appTitle: {
    color: colors.mui_woodside_blue_shade1,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.17,
    wordWrap: 'break-word'
  },
  siteName: {
    color: colors.mui_woodside_white,
    fontSize: 23,
    fontWeight: 400,
    letterSpacing: 0.25,
    wordWrap: 'break-word'
  }
}));

function AppTitle({ title, siteName }: AppTitleProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appTitle}>{title}</div>
      <div className={classes.siteName}>{siteName}</div>
    </div>
  )
}

export default AppTitle;