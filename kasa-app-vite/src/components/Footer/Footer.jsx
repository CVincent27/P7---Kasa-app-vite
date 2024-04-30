import './Footer.scss';
import Footer_logo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <img src={Footer_logo} alt="footer_logo" className="footer_logo" />
                <p className="footer_text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;