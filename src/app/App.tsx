import { Provider } from 'react-redux';
import { store } from './providers/store';
import { Toaster } from 'sonner';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
