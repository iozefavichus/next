import { useState, useEffect } from 'react';

import Button from './Button';
import styles from '../styles/ErrorComponent.module.css';

interface Props {
  className: string;
}

const ErrorComponent: React.FC<Props> = ({ className }) => {
  const [throwError, setThrowError] = useState(false);

  const handleClick = () => {
    setThrowError(true);
  };

  useEffect(() => {
    if (throwError) {
      throw new Error('Error...');
    }
  }, [throwError]);

  return (
    <Button className={`${styles.button} ${className}`} onClick={handleClick}>
      Push for error
    </Button>
  );
};

export default ErrorComponent;
