'use client';

import React from 'react';
import { Drawer, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: 64, // Adjust this value if your NavBar height is different
    backgroundColor: theme.palette.primary.main, // Same color as NavBar
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const SideMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: classes.drawer }}>
      <List className={classes.list}>
        {['Home', 'About', 'Contact'].map((text, index) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;