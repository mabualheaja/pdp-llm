import React from 'react';
import MyApp from '../src/_app';

function App({ Component, pageProps }) {
  return <MyApp Component={Component} pageProps={pageProps} />;
}

export default App;
