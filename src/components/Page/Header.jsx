import { Link } from 'react-router-dom';
import styles from './Header.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <h1>App Header</h1>
        <div className={styles.NavContainer}>
          <Navigation />
        </div>
      </header>
    </>
  );
}
