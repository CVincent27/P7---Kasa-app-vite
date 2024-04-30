import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LogementsID } from './components/Logements/LogementsID';
import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />,
    children: [
      {
        path: 'logements/:id',
        element: <LogementsID />
      },

    ],
  },
  { 
    path: 'About',
    element: <About />,
    errorElement: <Error />
  }
]);



function App() {
  return <RouterProvider router={router} />
}

export default App;