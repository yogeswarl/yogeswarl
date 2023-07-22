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
  const techincalSkills: string[] = ["Next.js","React","Javascript","Typescript","Node.js","Express.js","Python","FastAPI","MongoDB","MySQL","REST API","E2E Testing","Google Cloud","Github Actions","Stripe","Wordpress","HTML5","CSS3","SASS","Bootstrap","Tailwind CSS","Webpack","Google Analytics","Google Cloud:- Cloud Run, Compute Engine, TPU's, App Engine, SQL","Amazon Web Services:- EC2, IAM, S3, Lambda","StrapiJs"]
  const PersonalSkills: string[] = ["Time Management","Oral and Written Communication","Problem Solving","Teamwork","Desire to Learn","Leadership","Adaptability","Creativity","Critical Thinking","Decision Making","Self-Motivating","Stress Management","Work Ethic","Researcher"]
  const internetAddress :Data= {"github":"https://github.com/yogeswarl","linkedin":"https://www.linkedin.com/in/yogeswarl/","twitter":"https://twitter.com/yogeswarl","medium":"https://medium.com/@yogeswarl","email":"yogi2198@gmail.com"}
  const data = await getData()
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
          <ul className={`${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]} ${montserrat.className}`}>
            <li className={`${Style.card} ${Style["ta-center-nd"]} ${Style["fx-nd"]} ${Style['fx-c-nd']} ${Style['fx-cv-nd']} ${Style["mb-10"]}`}>
              <div className={`${Style.fx} ${Style["fx-sb"]} ${Style['fx-c-nd']} ${Style["fx-cv"]} ${Style["mb-2"]}`}>
                <h3 className={`${Style.heading}`}>University of Windsor</h3>
                <p className={`${Style["text-xl"]}`}>Sept 2021 - Aug 2023 </p>
              </div>
              <p className={`${Style["text-lg"]}`}>MSc Computer Science - AI Specialization</p>
            </li>
            <li className={`${Style.card} ${Style["ta-center-nd"]} ${Style["fx-nd"]} ${Style['fx-c-nd']} ${Style['fx-cv-nd']}`}>
              <div className={`${Style.fx} ${Style["fx-sb"]} ${Style['fx-c-nd']} ${Style["fx-cv"]} ${Style["mb-2"]}`}>
                <h3 className={`${Style.heading}`}>Hindustan Institute of Technology and Science</h3>
                <p className={`${Style["text-xl"]}`}>June 2015 - May 2019</p>
              </div>
              <p className={`${Style["text-lg"]}`}>B.Tech Computer Science - Cloud Computing Specialization</p>
            </li>
          </ul>
        </MainSection>
        {/* section 5 */}
        <MainSection id="section5" classname={`${Style["main-section"]} ${Style["container"]}`}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Places where I gained Experience</h2>
          <ul className={`${Style["mb-4"]} ${Style["container"]} ${Style["fx"]} ${Style["fx-sb"]} ${Style["fx-w"]} ${montserrat.className}` }>
            {data.experience && data.experience.map((exp:Data, index:number) => ( 
             <li key ={index} className={`${index} ${Style.card} ${Style['card-sm']} ${Style["mh-auto"]} ${Style["mb-12"]}`}>
             <h3 className={`${Style.heading} ${Style["mb-4"]}`}>{exp.name}</h3>
             <p className={`${Style["text-xl"]} ${Style["mb-2"]}`} >{exp.role}</p>
             <Link className={`${Style["tc-white"]} ${Style["fw-semibold"]} ${Style["icon-move"]}`} href={`/?modal=true&id=${index}&name=${exp.name.replace(' ','_')}`}> What I did here<Image src='/less-than-icon.svg' alt='show more icon' height={20} width={20} /></Link>
           </li>
            ))}
          </ul>
        </MainSection>
        {showModal && <Modal data={data.experience} id={Number(searchParams?.id)} />}
        {/* section 6 */}
        <MainSection id="section6" classname={[Style.fx, Style["fx-c"], Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-xl"]} ${Style["fw-semibold"]}`}>Projects and Open source contributions</h2>
          <ul className={`${Style["container"]} ${Style["fx"]} ${Style["fx-sb"]} ${Style["fx-w"]} ${Style["list-collection"]} ${montserrat.className}` }>
          {data.projects && data.projects.map((project:Data, index:number) => ( 
             <li key ={index} className={`${index} ${Style.card} ${Style['card-md']} ${Style["mh-auto"]} ${Style["mb-8"]}`}>
             <h3 className={`${Style.heading} ${Style["mb-4"]}`}>{project.name}</h3>
             <p className={`${Style["text"]} ${Style["mb-2"]}`} >{project.description}</p>
             {project.link && <Link target='_blank' className={`${Style["tc-white"]} ${Style["fw-semibold"]} ${Style["icon-move"]}`} href={`${project.link}`}> Link to project<Image src='/less-than-icon.svg' alt='show more icon' height={20} width={20} /></Link>}
           </li>
            ))}
          </ul>
          <Link target='_blank' className={`${Style["mb-4"]} ${Style["tc-white"]} ${Style["fw-semibold"]} ${Style["icon-move"]}`} href="https://github.com/yogeswarl">View more<Image src='/less-than-icon.svg' alt='show more icon' height={20} width={20} /></Link>
        </MainSection>  
        {/* section 7 */}
        <MainSection id="section3" classname={[Style.fx, Style["fx-c"], Style.container, Style["fx-cv"], Style["fx-ch"], Style["main-section"]]}>
          <article className={`${Style['inner-container']}`}>
            <h2 className={`${Style["heading-lg"]} ${Style["fw-semibold"]}`}>I am Actively seeking Fall 23&apos; job opportunities in Data Science, Full stack / Front end development and Machine learning roles.</h2>
          </article>
        </MainSection>
        {/* section 8 */}
         <MainSection id="section4" classname={[Style.container, Style["main-section"]]}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-lg"]} ${Style["fw-semibold"]}`}>Skills I have gained over the Years</h2>

          <h3 className={`${Style["ta-center"]} ${Style["mb-6"]} ${Style["heading-lg"]} ${montserrat.className} ${Style["fw-semibold"]}`}>Techical Skills:</h3>
          <ul className={`${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]} ${montserrat.className}`}>
            {techincalSkills.map((skill,index) => (<li key={index} className={`${Style['skill-box']}`}><span>{skill}</span></li>))}
          </ul>
          <h3 className={`${Style["ta-center"]} ${Style["mb-6"]} ${Style["heading-lg"]} ${Style["fw-semibold"]} ${montserrat.className}`}>Personal Skills:</h3>
          <ul className={`${Style["mb-4"]} ${Style["fx"]} ${Style["fx-w"]} ${montserrat.className}`}>
            {PersonalSkills.map((skill,index) => (<li key={index} className={`${Style['skill-box']}`}><span>{skill}</span></li>))}
          </ul>
        </MainSection>

        <MainSection id="section4" classname={[Style.container]}>
          <h2 className={`${Style["ta-center"]} ${Style["mb-12"]} ${Style["heading-lg"]} ${Style["fw-semibold"]}`}>Socials</h2>
          <ul className={`${Style["mb-8"]} ${Style["fx"]} ${Style["fx-ch"]} ${Style["fx-w"]} ${montserrat.className}`}>
            <li className={`${Style['mb-2']} ${Style["fx"]} ${Style["fx-ch"]}`}>
              <Image src="/github-icon.svg" alt="github icon" width={24} height={24} />
              <Link target='_blank' className={`${Style['ml-2']} ${Style["tc-white"]} ${Style["text-xl"]} ${Style["fw-semibold"]}`} href={internetAddress.github}>Github</Link>  
            </li>
            <li className={`${Style['mb-2']} ${Style['ml-4']} ${Style["fx"]} ${Style["fx-ch"]}`}>
              <Image src="/linkedin-icon.svg" alt="linkedin icon" width={24} height={24} />
              <Link target='_blank' className={`${Style['ml-2']} ${Style["tc-white"]} ${Style["text-xl"]} ${Style["fw-semibold"]}`} href={internetAddress.linkedin}>Linkedin</Link>
            </li>
            <li className={`${Style['mb-2']} ${Style['ml-4']} ${Style["fx"]} ${Style["fx-ch"]}`}>
              <Image src="/medium-icon.svg" alt="medium icon" width={24} height={24} />
              <Link target='_blank' className={`${Style['ml-2']} ${Style["tc-white"]} ${Style["text-xl"]} ${Style["fw-semibold"]}`} href={internetAddress.medium}>Medium</Link>
            </li>
            <li className={`${Style['mb-2']} ${Style['ml-4']} ${Style["fx"]} ${Style["fx-ch"]}`}>
              <Image src="/twitter-icon.svg" alt="twitter icon" width={24} height={24} />
              <Link target='_blank' className={`${Style['ml-2']} ${Style["tc-white"]} ${Style["text-xl"]} ${Style["fw-semibold"]}`} href={internetAddress.twitter}>Twitter</Link>
            </li>
            <li className={`${Style['mb-2']} ${Style['ml-4']} ${Style["fx"]} ${Style["fx-ch"]}`}>
              <Image src="/email-icon.svg" alt="email icon" width={24} height={24} />
              <Link target='_blank' className={`${Style['ml-2']} ${Style["tc-white"]} ${Style["text-xl"]} ${Style["fw-semibold"]}`} href={`mailto:${internetAddress.email}`}>Email</Link>
            </li>
          </ul>
        </MainSection>
        <footer id='footer'>
          <div className={`${Style.container} ${Style["fx"]} ${Style["fx-c"]} ${Style["fx-cv"]} ${Style["fx-ch"]}`}>
            <p className={`${Style["text-lg"]} ${Style["mb-2"]}`}>Made with ❤️ by Yogeswar</p>
            <p className={`${Style["text-lg"]} ${Style["mb-2"]}`}>©{new Date().getFullYear()} Yogeswar</p>
          </div>
        </footer>

      </main>
    </Fragment>
  )
}
