import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './Routes.jsx';
import UserProvider from '../../state/context/UserContext.jsx';
import WorkshopProvider from '../../state/context/WorkshopsContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <WorkshopProvider>
        <Toaster />
        <Router>
          <Routes />
        </Router>
      </WorkshopProvider>
    </UserProvider>
  );
}
