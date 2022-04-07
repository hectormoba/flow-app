import { useEffect, useState, useRef } from 'react';
import Display from 'components/timer/Display'
import Slider from "components/slider/Slider"
import CountDown from 'public/countdown.mp3';
import Bip from 'public/bip.mp3';

export default function Clock(props) {
  const [ seconds, setSeconds ] = useState(30);
  const [ minutes, setMinutes ] = useState(1);
  const [ hours, setHours ] = useState(0);
  const [ isActive, setIsActive ] = useState(false)
  const [ freeTime, setFreeTime ] = useState(1);
  const [isFreeTimeOn, setIsFreeTimeOn ] = useState(false);
  
  const { string } = props;

  console.log(string)
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

  return (
    <>
    <Slider
      isActive={isActive}
      isFreeTimeOn={isFreeTimeOn}
      seconds={seconds}
    />
    <Display 
      startStop={startStop}
      isActive={isActive}
      seconds={seconds}
      minutes={minutes}
      hours={hours}    
    />
    </>
  )
} 