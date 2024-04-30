import { Link } from "react-router-dom"
import NavBarre from "../../components/Header/Header";
import './Error.scss'
import Footer from "../../components/Footer/Footer";

export function Error () {
  return (
    <><>
      <NavBarre />
      <div className="error-container">
        <h1 className="error-404">404</h1>
        <p className="error-txt">Oups! La page que vous demandez n`existe pas.</p>
        <Link to="/" className="error-link">Retourner sur la page d`accueil</Link>
      </div></>
      <Footer /></>
  );
}