import styles from './slider.module.scss'

export default function Slider(){
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.slider}>
        <span className={`${styles.slider_item} font-m`}>working</span>
      </div>
      <div className={styles.slider}>
        <span className={`${styles.slider_item} font-m`}>short brake</span>
      </div>
      <div className={styles.slider}>
        <span className={`${styles.slider_item} font-m`}>long brake</span>
      </div>
    </section>
  )
}