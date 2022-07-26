import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import './reset.css';
import './global.css';
import styles from './Layout.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
