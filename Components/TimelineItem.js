import styles from "../styles/TimelineItem.module.scss";

export const TimelineItem = (props) => {
  return (
    <li>
      <div className={styles.Container}>
        <span className={`material-symbols-outlined ${styles.Icon}`}>
          school
        </span>
        <span className={styles.Badge}>
          {props.from} - {props.to}
        </span>
        <h3>{props.name}</h3>
        <h4>{props.additionalInfo}</h4>
        <p>{props.text}</p>
      </div>
    </li>
  );
};
