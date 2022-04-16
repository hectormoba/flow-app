import 'styles/main.scss';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [timeOpt, setTimeOpt] = useState({
    time: "50",
    shortBrake: "2"
  }) 
  return getLayout(
    <Component 
      {...pageProps}
      timeOpt={timeOpt}
      setTimeOpt={setTimeOpt}
    />);
};3