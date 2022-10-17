import styles from "../../styles/PageHeader.module.scss";

export const PageHeader = (props) => {
  return (
    <div className={styles.TextContainer}>
      <div>
        <h2>
          {props.header}
          <span> {props.highlighted}</span>
        </h2>
        <span className={styles.BackgroundText}>{props.background}</span>
      </div>
      <p>{props.text}</p>
    </div>
  );
};
