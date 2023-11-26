// const Header = () => (
//     <header>There will be search</header>
// );

// export default Header;

import ErrorComponent from './ErrorButton';
import styles from '../styles/Header.module.css';
import Search from './Search';


interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const headerClass = !className ? styles.root : `${styles.root} ${className}`;

  const handleSearch = (newValue: string) => {
    const currentQuery = searchParams.get('query');

    if (newValue !== currentQuery) {
      setSearchParams({ query: newValue, page: '1' });
      dispatch(setSearchQuery(newValue));
    }
  };

  return (
    <header className={headerClass}>
      <div className="container">
        <Search onSearch={handleSearch}></Search>
        {/* <span className={styles.subtitle}>search for unique photos</span> */}
        <ErrorComponent className={styles.error} />
      </div>
    </header>
  );
};

export default Header;
