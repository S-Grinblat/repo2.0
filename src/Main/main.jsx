import {MyInfo} from './sobre-mi/MyInfo'
import { Projects } from './projects/project'
import {BackgroundContainer} from './background/background-container'
import { About } from './curriculum/about'
import { Contact } from './contact/contact'
export const Main = () => {
  return(
    <>
      <MyInfo />
      <BackgroundContainer />
      <Projects />
      <About />
      <Contact />
    </>
    // <main className="main">

    //   
    // </main>

  )
}