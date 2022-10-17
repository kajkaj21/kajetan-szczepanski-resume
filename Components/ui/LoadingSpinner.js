import styles from "../../styles/LoadingSpinner.module.scss";
import { TailSpin } from "react-loader-spinner";
export const LoadingSpinner = () => {
  return (
    <div className={styles.Backdrop}>
      <TailSpin
        height="80"
        width="80"
        color="#27ae60"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
