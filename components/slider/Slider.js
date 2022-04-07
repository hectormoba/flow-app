import styles from './slider.module.scss'

export default function Slider(props){
  const {isActive, isFreeTimeOn, seconds} = props;
  
  let sliderWorking, sliderShortBrake, sliderLongBrake;

  if(isActive) {
    sliderWorking =`${styles.slider} active`;
    sliderShortBrake =`${styles.slider}`;
    sliderLongBrake =`${styles.slider}`;
  }
  if(isActive && isFreeTimeOn ) {
    sliderWorking =`${styles.slider}`;
    sliderShortBrake =`${styles.slider} `;
    sliderLongBrake =`${styles.slider} active`;
  }

  if(!isActive && !isFreeTimeOn && seconds > 0 ) {
    sliderWorking =`${styles.slider}`;
    sliderShortBrake =`${styles.slider} active`;
    sliderLongBrake =`${styles.slider}`;
  }


  return (
    <section className={styles.section_wrapper}>
      <div className={sliderWorking}>
        <span className="font-m">working</span>
      </div>
      <div className={sliderShortBrake}>
        <span className="font-m">short brake</span>
      </div>
      <div className={sliderLongBrake}>
        <span className="font-m">long brake</span>
      </div>
    </section>
  )
}