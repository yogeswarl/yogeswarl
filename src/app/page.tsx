import { Fragment } from 'react'
import Style from './page.module.scss'
import Image from "next/image";
import {MainSection} from '@/components/Home/section'
export default function Home() {
  const frontendIcons: string[] = ["react","typescript","html","css3","tailwindcss","sass","webpack","google-analytics"];
  const backendIcons: string[] = ["python", "mongodb","my-sql","express","nextjs","rest-api","ab-testing","google-cloud","github-actions","stripe"]
  return (
    <Fragment>
      {/* need to become a component */}
      <header></header>
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["top-right"]} ${Style.star}`}/>
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["top-left"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["center"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["bottom-right"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["bottom-left"]} ${Style.star}`} />
      <main className={`${Style.main} ${Style.parent}`}>
        
        {/* section 1 */}
        <MainSection classname={[Style.fx, Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"],Style["slide-in"]]}>
          <div className={`${Style['inner-container']}`}>
            <h1 className={`${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Hey 👋 , I am Yogeswar. Welcome to my portfolio</h1>
          </div>
        </MainSection>

        {/* section 2 */}
        <MainSection classname={[Style.fx, Style["fx-c"], Style.container, Style["fx-ch"], Style["main-section"]]}>

          {/* article 1 */}
          <article className={`${Style.fx} ${Style["fx-sb"]} ${Style["fx-cv"]} ${Style["mb-20"]}`}>
            <div className={`${Style["inner-container-sm"]}`}>
              <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>3+ years of experience working on the front end.</h2>
            </div>
              <ul className={`${Style["icon-list"]} ${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]}`}>
                {frontendIcons.map((icon,index) => (
                  <li key={icon} className={`${index%4!==0 ? Style["ml-12"] : null } ${Style["icon-list-item"]}`} data-tooltip={`${icon}`}>
                    <Image src={`/${icon}-icon.svg`} alt={icon} width={62} height={62} />
                  </li>
                ))}
              </ul>
          </article>

          {/* article 2 */}
          <article className={`${Style.fx} ${Style["fx-sb"]} ${Style["fx-cv"]}`}>
            <div className={`${Style["inner-container-sm"]} ${Style["fx-shrink"]}`}>
              <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>2+ years of experience working on the back end.</h2>
            </div>
            <ul className={`${Style["icon-list"]} ${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]}`}>
              {backendIcons.map((icon,index) => (
                <li key={icon} className={`${index%4!==0 ? Style["ml-12"] : null } ${Style["icon-list-item"]}`} data-tooltip={`${icon}`}>
                  <Image src={`/${icon}-icon.svg`} alt={icon} width={62} height={62} />
                </li>
              ))}
            </ul>
          </article>
        </MainSection>
        <MainSection classname={[Style.fx, Style["fx-c"], Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <div className={`${Style['inner-container']}`}>
            <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>Pursuing MSc in Computer Science - Artificial Intelligence at the University of Windsor</h2>
          </div>
        </MainSection>

      </main>
    </Fragment>
  )
}
