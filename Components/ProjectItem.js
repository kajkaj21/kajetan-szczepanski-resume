import { useState } from "react";
import styles from "../styles/ProjectItem.module.scss";
import Image from "next/image";

export const ProjectItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={styles.GridItem}
    >
      <div className={styles.ImageContainer}>
        <Image
          height="300"
          width="300"
          src={props.src}
          alt={props.alt}
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.Overlay} ${
          isHovered ? styles.Hovered : styles.Unhovered
        }`}
      >
        <h3>Project Source</h3>
        <div className={styles.Buttons}>
          <a href={props.github} rel="noreferrer" target="_blank">
            <button>GitHub</button>
          </a>
          <a href={props.demo} rel="noreferrer" target="_blank">
            <button>Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
