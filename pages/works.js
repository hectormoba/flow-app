import HomeLayout from "components/layouts/home/HomeLayout";

export default function WorksPage(){
  return (
    <>
    <div>
      <h2>How it works</h2>
    </div>
    <section>
      <h3>There is some points about flow clock that you should know</h3>
      <ul>
        <li>You decide how and how much you work between a set of options: You have three intervals of time 50min, 1.30h or 2.10h</li>
        <li>You have a limited amount of short breakes depending on which interval you have choosen. Chose wisely when to stop: when you complete all the short breakes that has been recivied by you, you won't be able to stop the clock again</li>
        <li>You can choose how much time short brakes are between 1 and 5 minutes.</li>
        <li>When you finish, you have an interval called free time. The free time value is 20% of your working time. For example, if you have completed and internval of 50 min, you will have a free time break of 10 minuts. </li>
        <li>Try to work as much as you can (between the selected time)</li>
      </ul>
    </section>
    </>
  )
}

WorksPage.getLayout = function getLayout(page){
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}