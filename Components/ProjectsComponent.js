import styles from "../styles/ProjectsComponent.module.scss";

import { ProjectItem } from "./ProjectItem";
import { PageHeader } from "./ui/PageHeader";

export const ProjectsComponent = () => {
  return (
    <div className={styles.Container}>
      <PageHeader
        text="Here is some of my work that I have done in various web technologies."
        header="MY"
        highlighted="Portfolio"
        background="MY WORK"
      />
      <div className={`${styles.GridContainer}`}>
        <ProjectItem
          src="/blackjack.jpg"
          alt="blackjack"
          github="https://github.com/kajkaj21/blackjack-vue"
          demo="https://kajetan-szczepanski-blackjack.netlify.app/"
        />
        <ProjectItem
          src="/tic-tac-toe-react.jpg"
          alt="tic-tac-toe"
          github="https://github.com/kajkaj21/tic-tac-toe-react"
          demo="https://kajetan-szczepanski-tic-tac-toe-react.netlify.app/"
        />
        <ProjectItem
          src="/windbnb-vue.jpg"
          alt="windbnd"
          github="https://github.com/kajkaj21/windbnb-vue"
          demo="https://kajetan-szczepanski-windbnb-vue.netlify.app/"
        />
        <ProjectItem
          src="/weather-app-react.jpg"
          alt="weather app"
          github="https://github.com/kajkaj21/weather-app-react"
          demo="https://kajetan-szczepanski-weather-app-react.netlify.app/"
        />
        <ProjectItem
          src="/product-page-react.jpg"
          alt="product page"
          github="https://github.com/kajkaj21/product-page-react"
          demo="https://kajetan-szczepanski-product-page-react.netlify.app/"
        />
        <ProjectItem
          src="/catwiki.jpg"
          alt="catwiki"
          github="https://github.com/kajkaj21/catwiki-react"
          demo="https://kajetan-szczepanski-catwiki-react.netlify.app/"
        />
        <ProjectItem
          src="/quizz-app-vue.jpg"
          alt="quizz app"
          github="https://github.com/kajkaj21/quiz-app-vue"
          demo="https://kajetan-szczepanski-quiz-app.netlify.app/"
        />
        <ProjectItem
          src="/gallery-app.jpg"
          alt="quizz app"
          github="https://github.com/kajkaj21/gallery-vue"
          demo="https://kajetan-szczepanski-gallery.netlify.app/"
        />
        <ProjectItem
          src="/wordle.jpg"
          alt="wordle"
          github="https://github.com/kajkaj21/wordle-clone"
          demo="https://kajetan-szczepanski-wordle-clone.netlify.app/"
        />
      </div>
    </div>
  );
};
