import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'detail/:artworkId', element: <DetailPage /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
