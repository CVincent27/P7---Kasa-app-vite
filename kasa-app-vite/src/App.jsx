import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import Logements from './pages/Logements/Logements';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />
  },
  { 
    path: 'About',
    element: <About />,
    errorElement: <Error />
  },
  {
    path: 'logements/:id',
    element: <Logements />,
    errorElement: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
