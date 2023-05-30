import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000', // black
        },
        secondary: {
            main: '#ffffff', // white
        },
        background: {
            default: '#121212', // dark gray
        },
        text: {
            primary: '#ffffff', // white
        },
    },
});

export default darkTheme;
