// pages/_app.js

import '../styles/index.css'
import { useState } from 'react';
import { ClickProvider } from '../contexts/click';

export default function MyApp({ Component, pageProps }) {

  return (
    <ClickProvider>
      <Component {...pageProps} />
    </ClickProvider>
  );
};