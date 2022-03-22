import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import WorkLayout from "../layout/WorkLayout";


export default function Home({children}) {

  return ( 
      <WorkLayout>
        {/* <Hero></Hero> */}
        <Intro />
      </WorkLayout>
  )
}
