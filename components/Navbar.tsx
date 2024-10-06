'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    width: '200px',
  },
  search: {
    flexGrow: 1,
    minWidth: '300px',
    marginRight: theme.spacing(2),
  },
  link: {
    marginLeft: theme.spacing(2),
  },
  appBar: {
    backgroundColor: theme.palette.primary.main, // Ensure this is the desired color
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MyApp
          </Typography>
          <TextField
            className={classes.search}
            variant="outlined"
            size="small"
            placeholder="Search..."
          />
          <Button color="inherit" className={classes.link}>Home</Button>
          <Button color="inherit" className={classes.link}>About</Button>
          <Button color="inherit" className={classes.link}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;