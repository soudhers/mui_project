'use client';

import React/*, { useEffect }*/ from 'react';
import { useState } from 'react';
import { signIn/*, signOut, useSession, getProviders, ClientSafeProvider*/ } from "next-auth/react";
import { AppBar, Toolbar, TextField, InputAdornment, IconButton, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import colors from '@styles/colors';
import AppTitle from '@components/AppTitle';
import NavTab from '@components/NavTab';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: '20px',
    width: 40,
    height: 40,
  },
  title: {
    width: '200px',
  },
  search: {
    flexGrow: 1,
    minWidth: '300px',
    marginRight: "20px",
    backgroundColor: colors.mui_woodside_blue_shade1,
    height: 64,
    '& .MuiInputBase-input': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
  },
  link: {
    marginLeft: "20px",
  },
  appBar: {
    backgroundColor: colors.mui_woodside_blue_shade3,
    boxShadow: 'none',
    height: 64,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  helpIcon: {
    marginLeft: 'auto',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);
  // useEffect(() => {
  //   const setAllProviders = async () => {
  //     const providers = await getProviders();
  //     console.log('Providers:', providers);
  //     setProviders(providers);
  //   };
  //   setAllProviders();
  // }, []);
  // console.log('Providers:', providers);
  const isUserLoggedIn = true;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    // Add sign out logic here
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Image src="/assets/icons/images/Woodside-MonoReversed-Vertical.svg" alt="Woodside Logo" className={classes.logo} width={40} height={40} />
          <AppTitle title="OMS" siteName="Shenzi" />
          <NavTab title="Home" />
          <NavTab title="Folders" />
          <NavTab title="Bookshelves" />
          <TextField
            className={classes.search}
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { height: '100%' },
            }}
          />
          <NavTab title="Links" />
          <NavTab title="About" />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="help"
            className={classes.helpIcon}
            onClick={handleClick}
          >
            <HelpOutlineIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled>{isUserLoggedIn || 'Guest User'}</MenuItem>
            <MenuItem onClick={handleClose}>Help Center</MenuItem>
            <MenuItem onClick={handleClose}>Contact Support</MenuItem>
            <MenuItem onClick={() => isUserLoggedIn ? signOut() : signIn("azure-ad")}>{isUserLoggedIn ? 'Sign Out' : 'Sign In'}</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;