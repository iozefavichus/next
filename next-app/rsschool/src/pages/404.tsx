import Link from "next/link";
import styles from "../styles/404.module.css";

const NotFoundPage: React.FC = () => {

    return (
      <div className={styles.root}>
        <p className={styles.subtitle}>Something is going wrong...</p>
      </div>
    );
  };

export default NotFoundPage;