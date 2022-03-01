import styles from './timer.module.scss';
import PauseCounter from "./PauseCounter";

export default function Timer(){
  return(
    <>
      <section className={`${styles.timer} font-xlplus`}>
        <h1 className={styles.timer__numbers}>00:00</h1>
        <button className={`${styles.timer__button} font-l`}>Start</button>
      </section>
      <PauseCounter />
    </>
  )
}