import HomeLayout from "components/layouts/home/HomeLayout";
import Clock from "lib/clock/Clock";

export default function HomePage(props) {
  const { timeOpt } = props;
  return (
    <>
      <Clock timeOpt={timeOpt}/>
    </>
  )
}

HomePage.getLayout = function getLayout(page){
  return (
    <HomeLayout mainClass="main">
      {page}
    </HomeLayout>
  )
}