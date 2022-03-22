import Intro from "../components/Home/Intro";
import WorkLayout from "../layout/WorkLayout";


export default function Home({children}) {

  return ( 
      <WorkLayout>
        <Intro />
      </WorkLayout>
  )
}
