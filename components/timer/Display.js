import { useState, useEffect } from 'react';
import styles from './timer.module.scss';
import PauseCounter from "./PauseCounter";

export default function Timer(props){
  const { seconds, minutes, hours, startStop, isActive } = props;
  const [ pauseCount , setPauseCount ] = useState(4)
  const [ isActivePause, setIsActivePause ] = useState (false);

  let strokeHash = {
    strokeDasharray: '283 283'
  }



  const handleClick = () => {
    if(!isActive) {
      if(isActivePause && pauseCount > 0) {
        startStop();
        setPauseCount(pauseCount - 1)
        setIsActivePause(!isActivePause);
      } else {
        startStop();
      } 
    } else if(isActive) {
      startStop();
      setIsActivePause(!isActivePause);
    }
  }

  let time = "00:00:00"


  if(minutes < 10 && seconds < 10) {
    time = `0${hours}:0${minutes}:0${seconds}`
  } else if(minutes < 10 && seconds >= 10) {
    time = `0${hours}:0${minutes}:${seconds}`
  } else if(minutes >= 10 && seconds < 10) {
    time = `0${hours}:${minutes}:0${seconds}`
  } else {
    time = `0${hours}:${minutes}:${seconds}`
  }

  return(
    <>
      <section className={`${styles.timer} font-xlplus`}>
        <svg className={styles.timer__svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g className={styles.timer__circle}>
          <path
            id="base-timer-path-remaining"
            className={styles["timer__circle-path"]}
            style={strokeHash}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          />
          </g>
         </svg>
        <h1 className={styles.timer__numbers}>{time}</h1>
        <button onClick={handleClick} className={`${styles.timer__button} font-l`}>{isActive ? "Pause" : "Start"}</button>
      </section>
      <PauseCounter 
        isActivePause={isActivePause}
        pauseCount={pauseCount}
        setIsActivePause={setIsActivePause}
      />
    </>
  )
}