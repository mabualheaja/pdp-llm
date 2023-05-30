import React from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '../utils/createEmotionCache';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

const themeVariables = {
    light: {
      '--background-color': lightTheme.palette.background.default,
      '--primary-color': lightTheme.palette.primary.main,
      '--secondary-color': lightTheme.palette.secondary.main,
      '--heading-font-family': 'Times New Roman, serif',
      '--text-color': lightTheme.palette.text.primary,
    },
    dark: {
      '--background-color': darkTheme.palette.background.default,
      '--primary-color': darkTheme.palette.primary.main,
      '--secondary-color': darkTheme.palette.secondary.main,
      '--heading-font-family': 'Times New Roman, serif',
      '--text-color': darkTheme.palette.text.primary,
    },
  };
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme();

interface MyAppProps {
  Component: React.ComponentType;
  emotionCache?: EmotionCache;
  pageProps?: any;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
    const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
      setThemeMode((prevThemeMode) => (prevThemeMode === 'light' ? 'dark' : 'light'));
    };
    const theme = themeMode === 'light' ? lightTheme : darkTheme;

    return (
      <ThemeProvider theme={theme}>
      <div style={themeVariables[themeMode]}>
        <Component {...pageProps} />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      </ThemeProvider>
  );
}

export default MyApp;
