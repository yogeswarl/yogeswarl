import { Fragment } from 'react'
import { montserrat } from './layout';
import Style from './page.module.scss'
import Image from "next/image";
import {MainSection} from '@/components/Home/Section'
import { Modal } from '@/components/Home/Modal';
import Link from 'next/link'
interface Data {
  [key:string] : string
} 
type Props = {
  searchParams: Record<string,string> | null | undefined
}
async function getData() {
  const res = await fetch('http://localhost:3000/data/test.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home({searchParams}: Props) {
  const frontendIcons: string[] = ["react","javascript","html5","css3","sass","bootstrap","tailwindcss","webpack","google-analytics","google-appengine"];
  const backendIcons: string[] = ["node","express","typescript","nextjs","python","fastapi","mongodb","my-sql","rest-api","e2e-testing","google-cloud","github-actions","stripe","wordpress"]
  const data  = await getData()
  const showModal = searchParams?.modal;
  return (
    <Fragment>
      {/* need to become a component */}
      <header></header>
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["top-right"]} ${Style.star}`}/>
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["top-left"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["center"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["bottom-right"]} ${Style.star}`} />
      <Image src="/star.svg" alt="twinkling stars" width= {10} height={10} className={`${Style["pos-fixed"]} ${Style["bottom-left"]} ${Style.star}`} />
      <main id='main' className={`${Style.main} ${Style.parent}`}>
        
        {/* section 1 */}
        <MainSection id="section1" classname={[Style.fx, Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"],Style["slide-in"], Style["mb-12"] ]}>
          <article className={`${Style['inner-container']}`}>
            <h1 className={`${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Hey 👋 , I am Yogeswar. Welcome to my portfolio</h1>
          </article>
          <a className={`${Style['icon-scroll']}`} href="#section2"></a>
        </MainSection>

        {/* section 2 */}
        <MainSection id="section2" classname={[Style.fx, Style["pt-18"],Style["fx-c"], Style["fx-ch"], Style.container, Style["main-section"]]}>

          {/* article 1 */}
          <article className={`${Style.fx} ${Style["fx-c-m"]} ${Style["fx-sb"]} ${Style["fx-cv"]} ${Style["mb-10"]}`}>
            <div className={`${Style["inner-container-sm"]} ${Style["mb-4"]} ${Style["mr-auto-m"]}`}>
              <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>3+ years of experience working on the front end.</h2>
            </div>
              <ul className={`${Style["icon-list"]} ${Style["mr-auto-m"]} ${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]}`}>
                {frontendIcons.map((icon,index) => (
                  <li key={icon} className={`${index%4!==0 ? Style["ml-12"] : null } ${Style["icon-list-item"]}`} data-tooltip={`${icon}`}>
                    <Image src={`/${icon}-icon.svg`} alt={icon} width={62} height={62} />
                  </li>
                ))}
              </ul>
          </article>

          {/* article 2 */}
          <article className={`${Style.fx} ${Style["fx-c-m"]} ${Style["fx-sb"]} ${Style["fx-cv"]}`}>
            <div className={`${Style["inner-container-sm"]} ${Style["mb-4"]} ${Style["mr-auto-m"]}`}>
              <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>2+ years of experience working on the back end.</h2>
            </div>
            <ul className={`${Style["icon-list"]} ${Style["mr-auto-m"]} ${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]}`}>
              {backendIcons.map((icon,index) => (
                <li key={icon} className={`${index%4!==0 ? Style["ml-12"] : null } ${Style["icon-list-item"]}`} data-tooltip={`${icon}`}>
                  <Image src={`/${icon}-icon.svg`} alt={icon} width={62} height={62} />
                </li>
              ))}
            </ul>
          </article>
        </MainSection>
        {/* section 3 */}
        <MainSection id="section3" classname={[Style.fx, Style["fx-c"], Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <article className={`${Style['inner-container']}`}>
            <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>Currently Pursuing MSc in Computer Science - Artificial Intelligence at UWindsor</h2>
          </article>
        </MainSection>
        {/* section 4 */}
        <MainSection id="section4" classname={[Style.container, Style["main-section"]]}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Places where I gained knowledge</h2>
          <ul className={`${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]} ${montserrat.className}` }>
            <li className={`${Style.card} ${Style["mb-10"]}`}>
              <div className={`${Style.fx} ${Style["fx-sb"]} ${Style["fx-cv"]} ${Style["mb-2"]}`}>
                <h3 className={`${Style.heading}`}>University of Windsor</h3>
                <p className={`${Style["text-xl"]}`}>Sept 2021 - Aug 2023 </p>
              </div>
              <p className={`${Style["text-lg"]}`}>MSc Computer Science - AI Specialization</p>
            </li>
            <li className={`${Style.card}`}>
              <div className={`${Style.fx} ${Style["fx-sb"]} ${Style["fx-cv"]} ${Style["mb-2"]}`}>
                <h3 className={`${Style.heading}`}>Hindustan Institute of Technology and Science</h3>
                <p className={`${Style["text-xl"]}`}>June 2015 - May 2019</p>
              </div>
              <p className={`${Style["text-lg"]}`}>B.Tech Computer Science - Cloud Computing Specialization</p>
            </li>
          </ul>
        </MainSection>
        <MainSection id="section5" classname={`${Style["main-section"]}`}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Places where I gained Experience</h2>
          <ul className={`${Style["mb-4"]} ${Style["container"]} ${Style["fx"]} ${Style["fx-sb"]} ${Style["fx-w"]} ${montserrat.className}` }>
            {data.experience as Data && data.experience.map((exp:Data, index:number) => ( 
             <li key ={index} className={`${index} ${Style.card} ${Style['card-sm']} ${Style["mh-auto"]} ${Style["mb-8"]}`}>
             <h3 className={`${Style.heading} ${Style["mb-4"]}`}>{exp.name}</h3>
             <p className={`${Style["text-xl"]} ${Style["mb-2"]}`} >{exp.role}</p>
             <Link className={`${Style["tc-white"]} ${Style["fw-semibold"]}`} href={`/?modal=true&id=${index}&name=${exp.name.replace(' ','_')}`}> What I did here &gt;</Link>
           </li>
            ))}
          </ul>
        </MainSection>
        {showModal && <Modal data={data.experience} id={Number(searchParams?.id)} />}
      </main>
    </Fragment>
  )
}
