import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Close from 'public/icons8-close-30.png';
import styles from './settingsForm.module.scss';

export default function SettingsFrom(props){
  const { setTimeOpt } = props;
  const [sendForm, setSendForm] = useState(false)
  const [ form, setForm ] = useState({
    time: "50",
    shortBrake: ""
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeOpt(form);
    setSendForm(true);

  }

  let formState;
  if(sendForm) {
    formState= <p>You've updated flow time. Please return to the clock to see the changes</p>
  }

  return (
    <section className={styles.settings__container}>
      <nav className={styles.navBar}>
        <h2 className={styles.title}>Settings</h2>
        <Link href="/">
          <Image 
            layout="fixed"
            src={Close}
          />
        </Link>
      </nav>
      <section>
        <>
          {formState}
        </>
        <form onSubmit={handleSubmit}>
          <h3>Time</h3>
          <p>Select a time for a flowing season</p>
          <select onChange={handleChange} value={form.time} name="time">
            <option value="50">50 minutes</option>
            <option value="90">1 hour and 30 minutes</option>
            <option value="130">2h and 10 minutes</option>
          </select>
          <p>Select a duration for your short brake</p>
          <input
            onChange={handleChange}
            value={form.shortBrake}
            name="shortBrake"
            type="number"
            max="5"
            min="1"
          />
          <input type="submit" value="update" className={styles.submitButton} />
          <div>
            <p>You're going to start a flow of n hour/s with m possible short brakes. When you finish the flow you have m minuts for rest</p>
          </div>
        </form>
      </section>
    </section>
  )
}