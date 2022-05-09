import HomeLayout from "components/layouts/home/HomeLayout";

export default function FlowPage(){
  return (
    <>
    <div>
      <h2>What is a flow?</h2>
    </div>
    <section>
      <p>In positive psychology, a flow state is the mental state in which a person performing some activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of the activity.</p>
      <h3>A flow state can be defined by experiencing some of this factos</h3>
      <ul>
        <li>Intense and focused concentration on the present moment</li>
        <li>A sense of personal control or agency over the situation or activity</li>
        <li>A distortion of temporal experience, as one's subjective experience of time is altered</li>
        <li>Experience of the activity as intrinsically rewarding, also referred to as autotelic experience</li>
      </ul>
      <p>To arrive to a flow state you need to spend much time that a 25 pomodoro regular time. Try to achive this is state with hour timer</p>
    </section>
    </>
  )
}

FlowPage.getLayout = function getLayout(page){
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}