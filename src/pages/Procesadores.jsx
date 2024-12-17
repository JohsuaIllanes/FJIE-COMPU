import { Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Procesadores.css';

const Procesadores = () => {
  return (
    <Container className="procesadores-container">
      <Row className="justify-content-center">
        <Col md="8" className="text-center">
          <h1 className="procesadores-title">Procesadores</h1>
          <p className="procesadores-description">
            Encuentra los mejores procesadores para tu PC gaming. Tenemos opciones de AMD e Intel para mejorar el rendimiento de tu computadora.
          </p>
          <Link to="/RAM">
            <Button color="primary">Explorar RAM</Button>
          </Link>
        </Col>
      </Row>

      {/* Cards de Procesadores */}
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md="3">
          <Card>
            <CardImg top width="100%" src="https://altagamadigital.com/wp-content/uploads/2023/10/img_173__1589062072-3.png" alt="Procesador 1" />
            <CardBody>
              <CardTitle tag="h5">Procesador Intel i9</CardTitle>
              <CardText>
                Potente procesador Intel con gran rendimiento para juegos y tareas intensivas.
              </CardText>
              <Button color="primary" a href="https://www.intel.la/content/www/xl/es/products/details/processors/core/i9.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md="3">
          <Card>
            <CardImg top width="100%" src="https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205700G%204.6%20GHz%2016MB%20Zen3%20Gr%C3%A1ficos%20Radeon%208%20AM4%20c/%20Cooler/d0b27542bd33480181c5d6581d44f028.webp" alt="Procesador 2" />
            <CardBody>
              <CardTitle tag="h5">Procesador AMD Ryzen 7</CardTitle>
              <CardText>
                Procesador de alto rendimiento de AMD ideal para gaming y multitareas.
              </CardText>
              <Button color="primary" a href="https://www.amd.com/es/products/processors/desktops/ryzen.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md="3">
          <Card>
            <CardImg top width="100%" src="https://www.grupocentrotecnologico.com/wp-content/uploads/2022/07/i-7-9700kf-in-cooler.png" alt="Procesador 3" />
            <CardBody>
              <CardTitle tag="h5">Procesador Intel i7</CardTitle>
              <CardText>
                Un procesador balanceado para gaming y trabajo profesional.
              </CardText>
              <Button color="primary" a href="https://www.intel.la/content/www/xl/es/products/details/processors/core/i7.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md="3">
          <Card>
            <CardImg top width="100%" src="https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-7600x.jpg" alt="Procesador 4" />
            <CardBody>
              <CardTitle tag="h5">Procesador AMD Ryzen 5</CardTitle>
              <CardText>
                Procesador ideal para juegos y productividad de alta demanda a un buen precio.
              </CardText>
              <Button color="primary" a href="https://www.amd.com/es/products/processors/desktops/ryzen.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card Ver Más */}
        <Col md="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Ver Más Procesadores</CardTitle>
              <CardText>
                Si deseas ver más opciones de procesadores, haz clic abajo para ver toda nuestra selección.
              </CardText>
              <Link to="/todosprocesadores">
                <Button color="secondary">Ver más</Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Procesadores;
