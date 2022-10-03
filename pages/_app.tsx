import 'antd/dist/antd.css';
import React from 'react';
import { styledTitle, styledHomeDiv, styledMainComp } from '../styles/Home.styles';

function MyApp({ Component, pageProps }) {
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
