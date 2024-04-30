import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LogementsID } from './components/Logements/LogementsID';
import { PageError } from './components/PageError/PageError';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <PageError />,
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
    errorElement: <PageError />
  }
]);



function App() {
  return <RouterProvider router={router} />
}

export default App;