import { useEffect, useState, useRef } from 'react';
import Display from 'components/timer/Display'
import Slider from "components/slider/Slider"
import CountDown from 'public/countdown.mp3';
import Bip from 'public/bip.mp3';

export default function Clock(props) {
  const { timeOpt } = props;
  const [ seconds, setSeconds ] = useState(0);
  const [ minutes, setMinutes ] = useState(50);
  const [ hours, setHours ] = useState(0);
  const [ isActive, setIsActive ] = useState(false)
  const [ freeTime, setFreeTime ] = useState(11);
  const [isFreeTimeOn, setIsFreeTimeOn ] = useState(false);
  

  const startStop = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if(timeOpt.time === "50"){
      setMinutes(50);
      setHours(0);
    }
    if(timeOpt.time === "90"){
      setMinutes(30);
      setHours(1);
    }
    if(timeOpt.time === "130"){
      setMinutes(10);
      setHours(2)
    }
  }, [timeOpt])

  useEffect(() => {
    let interval = null;
    if(isActive) {
      if(seconds === 0 && minutes === 0 && hours === 0) {
        if(!isFreeTimeOn) {
          setMinutes(freeTime);
          setIsFreeTimeOn(!isFreeTimeOn);
        }
        if(isFreeTimeOn){
          if(timeOpt.time === "50") {
            setMinutes(50);
          }
          if(timeOpt.time === "90"){
            setMinutes(30);
            setHours(1);
          }
          if(timeOpt.time === "130"){
            setMinutes(10);
            setHours(2)
          }
          setIsFreeTimeOn(!isFreeTimeOn);
        }
      } else if(seconds === 0 && minutes === 0 && hours !== 0) {
        interval = setInterval(() => {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59)
        }, 10);
      } else if(seconds === 0) {
        interval = setInterval(() => {
          setMinutes(minutes - 1);
          setSeconds(59);
        }, 10)
      } else if(seconds !== 0) {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 10);
      }

    } else if(!isActive){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  },[isActive, seconds, isFreeTimeOn])

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
      timeOpt={timeOpt}    
    />
    </>
  )
} 