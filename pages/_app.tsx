import 'antd/dist/antd.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { styledTitle, styledHomeDiv, styledMainComp } from '../styles/Home.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styledMainComp}>
      <div className={styledHomeDiv}>
        <h2 className={styledTitle}>Rick and Morty Info</h2>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
