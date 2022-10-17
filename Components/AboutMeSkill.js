import Image from "next/image";
import styles from "../styles/AboutMeSkill.module.scss";

export const AboutMeSkill = (props) => {
  return (
    <div className={styles.Container}>
      <Image
        src={props.src}
        width="100"
        height="100"
        alt={`${props.title} icon`}
      />
      <p>{props.title}</p>
    </div>
  );
};
