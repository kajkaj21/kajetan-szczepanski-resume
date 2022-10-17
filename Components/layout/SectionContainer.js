import styles from "../../styles/SectionContainer.module.scss";

export const SectionContainer = (props) => {
  return <section className={styles.Section}>{props.children}</section>;
};
