'use client';
import { createTheme } from '@mui/material/styles';
import { MixinsOptions } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles' {
  interface Theme {
    mixins: {
      toolbar: {
        minHeight: number;
      };
    };
  }
  interface ThemeOptions extends MixinsOptions {
    toolbar?: {
      minHeight?: number;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Define your primary color here
    },
    secondary: {
      main: '#dc004e', // Define your secondary color here
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    fontWeightBold: 700, // Ensure fontWeightBold is defined
  },
  mixins: {
    toolbar: {
      minHeight: 56, // Define your toolbar minHeight here
    },
  },
});

export default theme;