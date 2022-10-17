import styles from "../styles/AboutMeStat.module.scss";

export const AboutMeStat = (props) => {
  return (
    <div className={styles.Container}>
      <a href={props.link} rel="noreferrer" target="_blank">
        <div className={styles.TextContainer}>
          <p className={styles.TextBig}>{props.value}</p>
          <p className={styles.TextNormal}>{props.text}</p>
        </div>
      </a>
    </div>
  );
};
