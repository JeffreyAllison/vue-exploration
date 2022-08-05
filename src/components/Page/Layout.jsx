import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import './reset.css';
import './global.css';

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
