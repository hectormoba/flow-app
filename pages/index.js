import HomeLayout from "components/layouts/home/HomeLayout";
import Timer from "components/timer/Timer";

export default function HomePage() {
  return <Timer />
}

HomePage.getLayout = function getLayout(page){
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}