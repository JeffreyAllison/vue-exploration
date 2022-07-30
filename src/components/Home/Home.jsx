import { useTypes } from '../../../state/hooks/pokedex';
import styles from './Home.css';

export default function Home() {
  const variable = useTypes();
  console.log('data', variable);
  return (
    <div className={styles.Home}>
      <p>Hello World!</p>
    </div>
  );
}
