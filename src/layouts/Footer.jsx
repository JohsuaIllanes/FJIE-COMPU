import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <p>&copy; 2023 FJIE. Todos los derechos reservados.</p>
          </Col>
          <Col sm="12" md="6">
            <div className="social-icons">
              <a href="https://www.facebook.com/johsua.escobar/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://x.com/JohsuaI" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/fr_music.1/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://github.com/JohsuaIllanes" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="footer-links">
            <a href="/privacy-policy" className="footer-link">Política de privacidad</a>
            <a href="/terms-of-service" className="footer-link">Términos de servicio</a>
            <a href="/contact" className="footer-link">Contacto</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
