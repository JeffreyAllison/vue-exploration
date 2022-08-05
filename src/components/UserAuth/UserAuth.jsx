import Auth from './Auth.jsx';
import styles from './UserAuth.css';
import { useStatus } from '../../state/hooks/userAuth.js';
import { Navigate } from 'react-router-dom';

export default function UserAuth() {
  const { user } = useStatus();

  if (user) return <Navigate to="/" />;

  return <section className={styles.UserAuth}>{user && <Auth />}</section>;
}
