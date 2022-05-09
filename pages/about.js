import HomeLayout from "components/layouts/home/HomeLayout";

export default function AboutPage(){
  return (
    <>
    <div>
      <h2>About flow app</h2>
    </div>
    <section>
      <p>Flow app is a simple project inspired on other regular projectes, like pomodoro timer. But, we don't really like pomodoro's technique. Thus, we have developed a simple new solution that you can use working or studing.</p>
      <p>This solution is just a project part of a portfolio. Don't use it like a production software solution.</p>
    </section>
    </>
  )
}

AboutPage.getLayout = function getLayout(page){
  return (
    <HomeLayout mainClass="section_main">
      {page}
    </HomeLayout>
  )
}