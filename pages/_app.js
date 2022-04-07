import 'styles/main.scss';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [hello, setHello] = useState("hello") 

  return getLayout(<Component {...pageProps} string={hello} />);
};3