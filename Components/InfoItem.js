import styles from "../styles/InfoItem.module.scss";

export const InfoItem = (props) => {
  return (
    <div className={styles.InfoItem}>
      <div>
        {props.icon}
        <span>{props.title}</span>
      </div>
      <p>{props.text}</p>
    </div>
  );
};
