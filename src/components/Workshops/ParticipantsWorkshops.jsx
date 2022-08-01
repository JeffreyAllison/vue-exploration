import { Outlet } from 'react-router-dom';
import Navigation from '../Page/Navigation.jsx';
import styles from './ParticipantsWorkshops.css';

const navigation = [
  { to: '', label: 'Workshops' },
  { to: 'participants', label: 'Participants' },
];

export default function ParticipantsWorkshops() {
  return (
    <section className={styles.ParticipantsWorkshops}>
      <header>
        <Navigation navigation={navigation} />
      </header>
      <Outlet />
    </section>
  );
}
