import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LogementsID } from './components/Logements/LogementsID';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />
  }
]);



function App() {
  return <RouterProvider router={router} />
}

export default App;