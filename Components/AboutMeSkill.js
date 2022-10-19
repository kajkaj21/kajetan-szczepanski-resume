import Image from "next/image";
import styles from "../styles/AboutMeSkill.module.scss";

export const AboutMeSkill = (props) => {
  return (
    <div className={styles.Container}>
      <Image
        src={props.src}
        alt={`${props.title} icon`}
        width="100"
        height="100"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsrwcAAZMBCH6e0WEAAAAASUVORK5CYII="
      />
      <p>{props.title}</p>
    </div>
  );
};
