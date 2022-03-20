import HomeLayout from "components/layouts/home/HomeLayout";
import Slider from "components/slider/Slider"
import Clock from "lib/clock/Clock";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Clock />
    </>
  )
}

HomePage.getLayout = function getLayout(page){
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}