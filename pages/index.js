import HomeLayout from "components/layouts/home/HomeLayout";

export default function HomePage() {
  return <h1>Hello, react!</h1>
}

HomePage.getLayout = function getLayout(page){
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}