import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetUps";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
