import { useState, useEffect } from 'react';
import styles from './timer.module.scss';

export default function PauseCounter(props){
  const { isActivePause, pauseCount, setIsActivePause } = props;
  const [ pauseMinutes, setPauseMinutes ] = useState(5);
  const [ pauseSeconds, setPauseSeconds ] = useState(0);

  console.log(isActivePause);

  useEffect(() => {
    let interval = null;
    if(isActivePause) {
      if(pauseMinutes === 0 && pauseSeconds === 0) {
        setIsActivePause(!isActivePause);
      } 
      
      if(pauseSeconds === 0 && pauseMinutes !== 0) {
        interval = setInterval(() => {
          setPauseSeconds(59);
          setPauseMinutes(pauseMinutes - 1);
        }, 200)
      }  
      
      if(pauseSeconds !== 0){
        interval = setInterval(() => {
          setPauseSeconds(pauseSeconds - 1);
        }, 200);
      }

    } else if(!isActivePause) {
      clearInterval(interval),
      setPauseMinutes(5)
      setPauseSeconds(0);
    }
    return () => clearInterval(interval);
  },[isActivePause, pauseMinutes, pauseSeconds])
  

let pauseTime = "00:00";

if(pauseSeconds < 10) {
  pauseTime=`0${pauseMinutes}:0${pauseSeconds}`
} else {
  pauseTime = `0${pauseMinutes}:${pauseSeconds}`
}

  return(
    <section className={styles.pause}>
      <div className={styles.pause__item}>
        <h3 className="text-m">Pause time</h3>
        <p>{pauseTime}</p>
      </div>
      <div className={styles.pause__item}>
        <h3 className="text-m">Remain</h3>
        <p>{pauseCount}</p>
      </div>
    </section>
  )
}