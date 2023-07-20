import { Fragment } from 'react'
import Style from './page.module.scss'
import {Stars} from '@/components/Home/Stars'
import {MainSection} from '@/components/Home/section'
export default function Home() {
  return (
    <Fragment>
      {/* need to become a component */}
      <header></header>
      <Stars classname={[Style["pos-fixed"], Style["top-right"], Style.star]}/>
      <Stars classname={[Style["pos-fixed"], Style["top-left"], Style.star]}/>
      <Stars classname={[Style["pos-fixed"], Style["center"], Style.star]}/>
      <Stars classname={[Style["pos-fixed"], Style["bottom-right"], Style.star]}/>
      <Stars classname={[Style["pos-fixed"], Style["bottom-left"], Style.star]}/>
      <main className={`${Style.main} ${Style.parent}`}>
        
        {/* its a component, need to make it with a pass of children */}
        <MainSection classname={[Style.fx, Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"],Style["slide-in"]]}>
          <div className={`${Style['inner-container']}`}>
            <h1 className={`${Style.heading} ${Style["fw-semibold"]}`}>Hey 👋 , I am Yogeswar. Welcome to my portfolio</h1>
          </div>
        </MainSection>
        <MainSection classname={[Style.fx, Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <div className={`${Style['inner-container']}`}>
            <h1 className={`${Style.heading} ${Style["fw-semibold"]}`}>Hey 👋 , I am Yogeswar. Welcome to my portfolio 2</h1>
          </div>
        </MainSection>
        <MainSection classname={[Style.fx, Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <div className={`${Style['inner-container']}`}>
            <h1 className={`${Style.heading} ${Style["fw-semibold"]}`}>Hey 👋 , I am Yogeswar. Welcome to my portfolio 3</h1>
          </div>
        </MainSection>

      </main>
    </Fragment>
  )
}
