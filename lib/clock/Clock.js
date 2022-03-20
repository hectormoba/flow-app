import { useEffect, useState } from 'react';
import Timer from 'components/timer/Timer'

export default function Clock(props) {
  const [ seconds, setSeconds ] = useState(30);
  const [ minutes, setMinutes ] = useState(1);
  const [ hours, setHours ] = useState(0);
  const [ isActive, setIsActive ] = useState(false)

  const startStop = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if(isActive) {
      if(seconds === 0 && minutes === 0 && hours === 0) {
        setIsActive(!isActive);
      }
      if(seconds === 0 && minutes === 0) {
        interval = setInterval(() => {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59)
        }, 200);
      } else if(seconds === 0) {
        interval = setInterval(() => {
          setMinutes(minutes - 1);
          setSeconds(59);
        }, 200)
      } else {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 200);
      }
    } else if(!isActive){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  },[isActive, seconds, minutes, hours])

  return (
    <Timer 
      startStop={startStop}
      isActive={isActive}
      seconds={seconds}
      minutes={minutes}
      hours={hours}    
    />
  )
} 