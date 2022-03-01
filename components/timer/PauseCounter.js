import styles from './timer.module.scss';

export default function PauseCounter(){
  return(
    <section className={styles.pause}>
      <div className={styles.pause__item}>
        <h3 className="text-m">Pause time</h3>
        <p>00:00</p>
      </div>
      <div className={styles.pause__item}>
        <h3 className="text-m">Remain</h3>
        <p>4</p>
      </div>
    </section>
  )
}