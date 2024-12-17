import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; // Para los enlaces
import '../assets/css/RAM.css'; // Asegúrate de tener el archivo CSS

const RAM = () => {
  return (
    <Container className="ram-container">
      <h1 className="title">Memoria RAM</h1>
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://images-cdn.ubuy.co.in/667a246d082ba0379f519297-corsair-vengeance-lpx-32gb-2-x-16gb.jpg"
              alt="Corsair Vengeance LPX 16GB"
            />
            <CardBody>
              <CardTitle tag="h5">Corsair Vengeance LPX 16GB</CardTitle>
              <CardText>
                Memoria RAM de alto rendimiento, ideal para juegos y tareas exigentes.
              </CardText>
              <Button color="primary" a href="https://www.corsair.com/es/es/p/memory/cmk16gx4m2d3600c18/vengeancea-lpx-16gb-2-x-8gb-ddr4-dram-3600mhz-c18-memory-kit-black-cmk16gx4m2d3600c18?srsltid=AfmBOooaTBTZoirio6Yt6kKxUqg8ASlj98tCkdHlgdpCKkSnGObonA03">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://m.media-amazon.com/images/I/618SEnJR1nL.jpg"
              alt="G.SKILL Ripjaws V 16GB"
            />
            <CardBody>
              <CardTitle tag="h5">G.SKILL Ripjaws V 16GB</CardTitle>
              <CardText>
                Excelente opción para gaming y multitareas, con velocidades rápidas y gran estabilidad.
              </CardText>
              <Button color="primary" a href="https://www.gskill.com/product/165/184/1536110676/F4-3200C16D-16GVKB">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://i.ebayimg.com/images/g/boAAAOSwQRNlSHTY/s-l1200.jpg"
              alt="Crucial Ballistix 16GB"
            />
            <CardBody>
              <CardTitle tag="h5">Crucial Ballistix 16GB</CardTitle>
              <CardText>
                RAM de alto rendimiento diseñada para juegos y tareas intensivas.
              </CardText>
              <Button color="primary" a href="https://www.asusbymacman.es/crucial-ballistix-16gb-ddr4-3200mhz-memoria-ram-2679.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://static-geektopia.com/storage/t/i/807/80792/61_n0eqvaxl_ac_sx679_.webp"
              alt="HyperX Fury 16GB"
            />
            <CardBody>
              <CardTitle tag="h5">HyperX Fury 16GB</CardTitle>
              <CardText>
                Módulo de RAM de gran velocidad y confiabilidad para gamers y usuarios profesionales.
              </CardText>
              <Button color="primary" a href="https://www.pccomponentes.com/kingston-hyperx-fury-black-16gb-ddr4-3200mhz-pc-25600-cl16?srsltid=AfmBOoqulTVj3My3wSjDpP-LEttUp1qSFxxYBZHWWNPm2y07eEIu5Ctx">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card "Ver más" */}
        <Col md="3" className="mb-4">
          <Card>
            <CardBody className="text-center">
              <CardTitle tag="h5">Ver Más Memorias RAM</CardTitle>
              <CardText>
                Explora una variedad aún mayor de opciones de memoria RAM para mejorar tu PC.
              </CardText>
              <Link to="/todosram">
                <Button color="primary">Ver Más</Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RAM;
