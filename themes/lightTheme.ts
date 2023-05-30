import { createTheme } from '@mui/material/styles';


const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff', // white
      },
      secondary: {
        main: '#000000', // black
      },
      background: {
        default: '#ffffff', // white
      },
      text: {
        primary: '#000000', // black
      },
    },
  });
export default lightTheme;
