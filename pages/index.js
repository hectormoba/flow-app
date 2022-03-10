import HomeLayout from "components/layouts/home/HomeLayout";
import Slider from "components/slider/Slider"
import Timer from "components/timer/Timer";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Timer />
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