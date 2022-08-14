import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components';
import {
  HomePage,
  QueriesPage,
  UserActionsPage,
  UserInteractionsPage,
  NotFoundPage
} from './pages';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='queries' element={<QueriesPage />} />
          <Route path='userActions' element={<UserActionsPage />} />
          <Route path='userInteractions' element={<UserInteractionsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
