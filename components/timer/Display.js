import { useState, useEffect } from 'react';
import styles from './timer.module.scss';
import PauseCounter from "./PauseCounter";

export default function Timer(props){
  const { seconds, minutes, hours, startStop, isActive, timeOpt, freeTime, count } = props;
  let { time } = timeOpt;
  const [ remainingCircle, setRemainingCircle ] = useState("283");
  const [ isActivePause, setIsActivePause ] = useState(false);
  const [ pauseCount , setPauseCount ] = useState(2);

  let stroke = {
    strokeDasharray: `${remainingCircle} 283`,
    stroke: `#f87070`
  }

  const circleProgress = () => {
    let totalTime = freeTime === false ? Number(time) * 60 : (Number(time) * 0.2) * 60;
    let restTime = (hours * 60 * 60) + (minutes * 60) + seconds;
    setRemainingCircle(
      ((restTime/totalTime) * 283).toFixed(0)
    )
  }

  useEffect(()=> {
    circleProgress();
  },[seconds, timeOpt]);

  useEffect(() => {
    if(!isActive && !isActivePause) {
      setRemainingCircle("283");
    }
  },[isActive])

  //change color depending on is a long break or not
  if(freeTime) {
    stroke.stroke = `#70f3f8`
  } else {
    stroke.stroke = `#f87070`
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

  let displayedTime = "00:00:00"

  if(minutes < 10 && seconds < 10) {
    displayedTime = `0${hours}:0${minutes}:0${seconds}`
  } else if(minutes < 10 && seconds >= 10) {
    displayedTime = `0${hours}:0${minutes}:${seconds}`
  } else if(minutes >= 10 && seconds < 10) {
    displayedTime = `0${hours}:${minutes}:0${seconds}`
  } else {
    displayedTime = `0${hours}:${minutes}:${seconds}`
  }

  return(
    <>
      <section className={`${styles.timer} font-xlplus`}>
        <svg className={styles.timer__svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g className={styles.timer__circle}>
          <path
            id="base-timer-path-remaining"
            className={styles["timer__circle-path"]}
            style={stroke}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          />
          </g>
         </svg>
        <h1 className={styles.timer__numbers}>{displayedTime}</h1>
        {
          pauseCount > 0 ? 
          (<button
            onClick={handleClick} 
            className={`${styles.timer__button} font-l`}>
              {isActive ? "Pause" : "Start"}
          </button>)
          : (<button
            disabled
            aria-autocomplete="off"
            onClick={handleClick} 
            className={`${styles.timer__button} disabled font-l`}>
              Pause
          </button>)
        }
        
      </section>
      <PauseCounter
        count={count}
        timeOpt={timeOpt}
        pauseCount={pauseCount}
        changeCount={setPauseCount} 
        isActivePause={isActivePause}
        setIsActivePause={setIsActivePause}
      />
    </>
  )
}