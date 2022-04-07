import HomeLayout from "components/layouts/home/HomeLayout";
import Clock from "lib/clock/Clock";

export default function HomePage(props) {
  const { string } = props;
  return (
    <>
      <Clock string={string}/>
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