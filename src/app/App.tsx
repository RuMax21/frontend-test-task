import { Provider } from 'react-redux';
import { store } from './providers/store';
import { Toaster } from 'sonner';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router';
import TeamPage from '@/pages/TeamPage';

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
