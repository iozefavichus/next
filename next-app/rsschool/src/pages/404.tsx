import Link from "next/link";
import styles from "../styles/404.module.scss";

const NotFoundPage: React.FC = () => {

    return (
      <div className={styles.root}>
        <p className={styles.subtitle}>Something is going wrong...</p>
        <Link className={styles.link}> Go to home page</Link>
      </div>
    );
  };

export default NotFoundPage;