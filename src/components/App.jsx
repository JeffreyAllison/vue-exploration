import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import List from './List/List.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import WorkshopProvider from '../../state/context/WorkshopsContext.jsx';
import ParticipantsWorkshops from './Workshops/ParticipantsWorkshops.jsx';
import Workshops from './Workshops/Workshops.jsx';

export default function App() {
  return (
    <Router>
      <WorkshopProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="list" element={<List />} />
            <Route path="about" element={<About />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route
              path="participants-workshops"
              element={<ParticipantsWorkshops />}
            >
              <Route index element={<Workshops />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </WorkshopProvider>
    </Router>
  );
}
