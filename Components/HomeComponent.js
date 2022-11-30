import styles from "../styles/HomeComponent.module.scss";
import Image from "next/image";
import { SectionContainer } from "./layout/SectionContainer";
import myImage from "../public/me3.jpg";

export const HomeComponent = () => {
  return (
    <SectionContainer>
      <div className={styles.Container}>
        <div className={styles.TextContainer}>
          <h2>
            Hi, I&apos;m <span>Kajetan Szczepański.</span> A Web Developer.
          </h2>
          <p>
            I&apos;m an aspiring Web Developer who loves to create beautiful and
            functional websites. My main goal is to get a job as a Front-End
            Developer to work on real-life projects together with other
            professionals and learn from them to enhance my programming skills.
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <div className={styles.LeftSide}></div>
          <div className={styles.Image}>
            <Image
              src={myImage}
              alt="Image of me"
              width="1024"
              height="1024"
              priority={true}
              placeholder="blur"
              quality="70"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
