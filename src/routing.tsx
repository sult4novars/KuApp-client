import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'src/pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
