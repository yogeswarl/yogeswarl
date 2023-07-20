import { Fragment } from 'react'
import Style from './page.module.scss'
import {Stars} from '@/components/Home/Stars'
import {MainSection} from '@/components/Home/section'
export default function Home() {
  return (
    <Fragment>
      {/* need to become a component */}
      <header></header>
      <main className={`${[Style.parent,Style["pos-rel"], Style.main].join(" ")}`}>
        <Stars classname={[Style["pos-abs"], Style["top-right"], Style.star]}/>
        <Stars classname={[Style["pos-abs"], Style["top-left"], Style.star]}/>
        <Stars classname={[Style["pos-abs"], Style["bottom-right"], Style.star]}/>
        <Stars classname={[Style["pos-abs"], Style["bottom-left"], Style.star]}/>
        
        {/* its a component, need to make it with a pass of children */}
        <MainSection classname={[Style.fx, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <h1>Home</h1>
        </MainSection>
        <MainSection classname={[Style.fx, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <h1>Home</h1>
        </MainSection>
        <MainSection classname={[Style.fx, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <h1>Home</h1>
        </MainSection>

      </main>
    </Fragment>
  )
}
