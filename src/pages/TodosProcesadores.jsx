import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';  // Para el enlace a la página de detalles si es necesario
import '../assets/css/TodosProcesadores.css';  // Asegúrate de tener el archivo CSS

const TodosProcesadores = () => {
  return (
    <Container className="todos-procesadores-container">
      <h1 className="title">Lista Completa de Procesadores</h1>
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://altagamadigital.com/wp-content/uploads/2023/10/img_173__1589062072-3.png" alt="Procesador Intel i9" />
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
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://logg.api.cygnus.market/static/logg/Global/Procesador%20AMD%20Ryzen%207%205700G%204.6%20GHz%2016MB%20Zen3%20Gr%C3%A1ficos%20Radeon%208%20AM4%20c/%20Cooler/d0b27542bd33480181c5d6581d44f028.webp" alt="Procesador AMD Ryzen 7" />
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
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://www.grupocentrotecnologico.com/wp-content/uploads/2022/07/i-7-9700kf-in-cooler.png" alt="Procesador Intel i7" />
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
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-7600x.jpg" alt="Procesador AMD Ryzen 5" />
            <CardBody>
              <CardTitle tag="h5">Procesador AMD Ryzen 5</CardTitle>
              <CardText>
                Procesador ideal para juegos y productividad de alta demanda a un buen precio.
              </CardText>
              <Button color="primary" a href="https://www.amd.com/es/products/processors/desktops/ryzen.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://www.pc.com.bo/assets/img/productos/procesadores/pi510400.png" alt="Procesador Intel i5" />
            <CardBody>
              <CardTitle tag="h5">Procesador Intel i5</CardTitle>
              <CardText>
                Buen procesador para un balance entre precio y rendimiento, ideal para gamers.
              </CardText>
              <Button color="primary" a href="https://www.intel.la/content/www/xl/es/products/details/processors/core/i5.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 6 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7700x.jpg" alt="Procesador AMD Ryzen 7 7700X" />
            <CardBody>
              <CardTitle tag="h5">AMD Ryzen 7 7700X</CardTitle>
              <CardText>
                Rendimiento superior para jugadores y creadores de contenido.
              </CardText>
              <Button color="primary" a href="https://www.amd.com/es/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 7 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-3954738.jpg" alt="Intel Core i5-10600K" />
            <CardBody>
              <CardTitle tag="h5">Intel Core i5-10600K</CardTitle>
              <CardText>
                Perfecto para juegos y tareas cotidianas, con una excelente relación calidad-precio.
              </CardText>
              <Button color="primary" a href="https://www.intel.la/content/www/xl/es/products/sku/199311/intel-core-i510600k-processor-12m-cache-up-to-4-80-ghz/specifications.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 8 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://bgamer.pro/wp-content/uploads/2021/01/1111.jpg" alt="AMD Ryzen 5 5600X" />
            <CardBody>
              <CardTitle tag="h5">AMD Ryzen 5 5600X</CardTitle>
              <CardText>
                Procesador con excelente rendimiento en juegos y aplicaciones multitarea.
              </CardText>
              <Button color="primary" a href="https://www.amd.com/es/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5600x.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TodosProcesadores;
