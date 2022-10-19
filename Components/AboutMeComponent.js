import styles from "../styles/AboutMeComponent.module.scss";
import { SectionContainer } from "./layout/SectionContainer";
import { PageHeader } from "./ui/PageHeader";
import { AboutMeStat } from "./AboutMeStat";
import { AboutMeSkill } from "./AboutMeSkill";
import { TimelineItem } from "./TimelineItem";

export const AboutMeComponent = () => {
  return (
    <SectionContainer>
      <div className={styles.Container}>
        <PageHeader header="about" highlighted="me" background="my stats" />
        <div className={styles.TextContainer}>
          <h3>Information about me</h3>
          <p>
            In 2020 I graduated from Zespół Szkół Elektronicznych im. Bohaterów
            Westerplatte Technical College in my hometown, Radom, Poland. I
            obtained an IT technician certificate by passing the E12(Assembly
            and operation of personal computers and external devices),
            E13(Designing of local computer networks and network administration)
            and E14(Creation of web applications and databases and database
            administration) exams. Then, I decided to go to the Kazimierz
            Pułaski University of Technology and Humanities in Radom to study
            Electrical Engineering. In the break between the third and fourth
            semester, I concluded that this was not what I wanted to do in my
            life, and I dropped out of the University.
          </p>
          <p>
            After that, I focused on learning web development on my own. Since
            then I have been taking Udemy courses specified in Front-End
            Development, reading blogs, articles and books about web
            technologies and doing coding exercises on platforms like Codewars
            or LeetCode. I also have been creating my projects which you can
            check out in the next section.
          </p>
        </div>
        <div className={styles.Stats}>
          <AboutMeStat
            value="20+"
            text="Projects on Github"
            link="https://github.com/kajkaj21?tab=repositories"
          />
          <AboutMeStat
            value="5"
            text="Stars on Github"
            link="https://github.com/kajkaj21"
          />
          <AboutMeStat
            value="600+"
            text="Completed exercises on Codewars"
            link="https://www.codewars.com/users/kajkaj21"
          />
          <AboutMeStat
            value="6"
            text="Completed front-end Udemy courses"
            link="https://www.udemy.com/"
          />
        </div>
        <div className={styles.Skills}>
          <h4>Technologies I have worked with</h4>
          <div className={styles.Grid}>
            <AboutMeSkill src="/html.png" title="HTML" />
            <AboutMeSkill src="/css.png" title="CSS" />
            <AboutMeSkill src="/js.png" title="JavaScript" />
            <AboutMeSkill src="/sass.png" title="SASS" />
            <AboutMeSkill src="/react.png" title="React" />
            <AboutMeSkill src="/vue.png" title="Vue" />
            <AboutMeSkill src="/ts.png" title="TypeScript" />
          </div>
        </div>
        <div className={styles.Timeline}>
          <h4>My timeline</h4>
          <ul>
            <TimelineItem
              from="2020"
              to="2022"
              name="Kazimierz
              Pułaski University of Technology and Humanities in Radom"
              additionalInfo="Electrical Engineering"
            />
            <TimelineItem
              from="2016"
              to="2020"
              name="Zespół Szkół Elektronicznych im. Bohaterów Westerplatte w Radomiu"
              additionalInfo="IT Technician"
            />
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
