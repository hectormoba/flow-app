import { useEffect, useState } from 'react';
import Timer from 'components/timer/Timer'

export default function Clock(props) {
  const [ seconds, setSeconds ] = useState(30);
  const [ minutes, setMinutes ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ isActive, setIsActive ] = useState(false)
  const [ freeTime, setFreeTime ] = useState(1);
  const [isFreeTimeOn, setIsFreeTimeOn ] = useState(false)

  const startStop = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if(isActive) {
      if(seconds === 0 && minutes === 0 && hours === 0) {
        //play some sound and wait 2 seconds
        if(!isFreeTimeOn) {
          setMinutes(freeTime);
          setIsFreeTimeOn(!isFreeTimeOn);
        }
        if(isFreeTimeOn){
          setSeconds(30);
          setIsFreeTimeOn(!isFreeTimeOn);
        }
      }

      if(seconds === 0 && minutes === 0 && hours !== 0) {
        interval = setInterval(() => {
          setSeconds(59)
          setMinutes(59);
          setHours(hours - 1);
        }, 200);
      } 
      
      if(seconds === 0) {
        interval = setInterval(() => {
          setSeconds(59);
          setMinutes(minutes - 1);
        }, 200)
      } 

      if(seconds !== 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 200);
      } 

    } else if(!isActive){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  },[isActive, seconds, minutes, hours])

  useEffect(() => {
    if(seconds === 10 && minutes === 0 && hours === 0) {
      playCountDown();
    }
  })

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