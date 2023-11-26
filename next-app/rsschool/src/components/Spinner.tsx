import { SIZE, SPINNER_VARIANT } from '@/types/types';
import styles from '../styles/Spinner.module.css';

interface Props {
  size?: SIZE;
  variant?: SPINNER_VARIANT;
  children?: string;
  className?: string;
}

const Spinner: React.FC<Props> = ({ size = 'small', variant = 'local', children, className }) => {
  const spinnerClass = !className ? styles.root : `${styles.root} ${className}`;

  return (
    <div className={`${spinnerClass} ${styles[size]} ${styles[variant]}`}>
      <div className={styles.spinner}>{children}</div>
    </div>
  );
};

export default Spinner;
