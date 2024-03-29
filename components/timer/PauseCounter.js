import { useState, useEffect } from 'react';
import styles from './timer.module.scss';

export default function PauseCounter(props){
  const { 
    isActivePause, 
    setIsActivePause,
    timeOpt,
    pauseCount,
    changeCount,
    count } = props;
  let { time, shortBrake } = timeOpt
  const [ pauseMinutes, setPauseMinutes ] = useState(5);
  const [ pauseSeconds, setPauseSeconds ] = useState(0);



  useEffect(()=>{
    time === "90" ? changeCount(3)
      : time === "130" ? changeCount(4)
      : changeCount(2);
    
    setPauseMinutes(Number(shortBrake))
  },[timeOpt, count.current])

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
      setPauseMinutes(Number(shortBrake))
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
        <h3 className={`${styles.pause__item__title} font-m`}>Pause time</h3>
        <p>{pauseTime}</p>
      </div>
      <div className={styles.pause__item}>
        <h3 className={`${styles.pause__item__title} font-m`}>Remain</h3>
        <p>{pauseCount}</p>
      </div>
    </section>
  )
}