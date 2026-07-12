import { Provider } from 'react-redux';
import { store } from './providers/store';
import { Toaster } from 'sonner';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router';
import TeamPage from '@/pages/TeamPage';
import { NavBar } from '@/widgets/navbar/ui';

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <NavBar />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
