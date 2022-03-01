import PauseCounter from "./PauseCounter"

export default function Timer(){
  return(
    <div>
      <section className="timer">
        <h1 className="timer__numbers">00:00</h1>
        <button className="timer__button">Start</button>
      </section>
      <PauseCounter />
    </div>
  )
}