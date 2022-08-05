import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './UserAuth/ProtectedRoutes.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import List from './List/List.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import ParticipantsWorkshops from './Workshops/ParticipantsWorkshops.jsx';
import Workshops from './Workshops/Workshops.jsx';

export default function Routes() {
  return (
    <RRoutes>
      <Route path="user/*" element={<UserAuth />} />
      <Route element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route
            path="participants-workshops"
            element={<ParticipantsWorkshops />}
          >
            <Route index element={<Workshops />} />
          </Route>
        </Route>

        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
