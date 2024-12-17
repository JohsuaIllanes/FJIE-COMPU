import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';  // Para el enlace a la página de detalles si es necesario
import '../assets/css/TodosRAM.css';  // Asegúrate de tener el archivo CSS

const TodosRAM = () => {
  return (
    <Container className="todos-ram-container">
      <h1 className="title">Lista Completa de Memorias RAM</h1>
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://images-cdn.ubuy.co.in/667a246d082ba0379f519297-corsair-vengeance-lpx-32gb-2-x-16gb.jpg" alt="RAM Corsair Vengeance LPX" />
            <CardBody>
              <CardTitle tag="h5">Corsair Vengeance LPX 16GB</CardTitle>
              <CardText>
                Memoria RAM de alto rendimiento, ideal para juegos y tareas exigentes.
              </CardText>
              <Button color="primary" a href="https://www.corsair.com/es/es/p/memory/cmk16gx4m1e3200c16/vengeancea-lpx-16gb-1-x-16gb-ddr4-dram-3200mhz-c16-memory-kit-black-cmk16gx4m1e3200c16?srsltid=AfmBOoq2iFk1k2kMPe85ZM1CTZhqPyitRB-k6KQLrdDI8HYYe7aWOZ0A">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://bgamer.pro/wp-content/uploads/2022/10/kingston-fury-ddr4-16gb-1.jpg" alt="RAM Kingston HyperX Fury" />
            <CardBody>
              <CardTitle tag="h5">Kingston HyperX Fury 16GB</CardTitle>
              <CardText>
                Con un excelente rendimiento, ideal para overclocking y multitareas.
              </CardText>
              <Button color="primary" a href="https://bgamer.pro/tienda/gaming-accesorios/memoria-ram/memoria-ram-2/hyperx-fury-16gb-3200mhz-ddr4/">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://m.media-amazon.com/images/I/61l4EStxhnL.jpg" alt="RAM G.Skill Trident Z RGB" />
            <CardBody>
              <CardTitle tag="h5">G.Skill Trident Z RGB 32GB</CardTitle>
              <CardText>
                Memoria de alto rendimiento con iluminación RGB, ideal para juegos y PC de alto rendimiento.
              </CardText>
              <Button color="primary" a href="https://www.gskill.com/product/165/166/1536654621/F4-3200C16D-32GTZR">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://i.ebayimg.com/images/g/boAAAOSwQRNlSHTY/s-l1200.jpg" alt="RAM Crucial Ballistix" />
            <CardBody>
              <CardTitle tag="h5">Crucial Ballistix 16GB</CardTitle>
              <CardText>
                RAM con alta velocidad y bajo perfil para una mayor compatibilidad.
              </CardText>
              <Button color="primary" a href="https://www.asusbymacman.es/crucial-ballistix-16gb-ddr4-3200mhz-memoria-ram-2679.html">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://images-cdn.ubuy.co.in/667a246d082ba0379f519297-corsair-vengeance-lpx-32gb-2-x-16gb.jpg" alt="Corsair Vengeance LPX 32GB" />
            <CardBody>
              <CardTitle tag="h5">Corsair Vengeance LPX 32GB</CardTitle>
              <CardText>
                Potente memoria RAM de 32GB, ideal para trabajos pesados y gaming avanzado.
              </CardText>
              <Button color="primary" a href="https://www.corsair.com/lm/es/p/memory/cmk32gx4m2e3200c16/vengeancea-lpx-32gb-2-x-16gb-ddr4-dram-3200mhz-c16-memory-kit-black-cmk32gx4m2e3200c16?srsltid=AfmBOor__PuYS9ZX_PSoGnPst5xl03MLovH2lytd1y13PQaP618LIEv8">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 6 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://images.teamgroupinc.com/products/memory/u-dimm/ddr4/elite-plus/red/01.jpg" alt="RAM TeamGroup Elite" />
            <CardBody>
              <CardTitle tag="h5">TeamGroup Elite 8GB</CardTitle>
              <CardText>
                Memoria RAM económica y eficiente, perfecta para usuarios que no requieren overclocking.
              </CardText>
              <Button color="primary" a href="https://www.teamgroupinc.com/en/product-detail/memory/TEAMGROUP/elite-plus-u-dimm-ddr4-black/elite-plus-u-dimm-ddr4-black-TPD48G3200HC2201/">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 7 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://bolivia.solutekla.com/photo/1/adata/memorias/ddr4_16gb_3000mhz_adata_xpg_gammix_d30_black_ax4u3000316g16sb3/ddr4_16gb_3000mhz_adata_xpg_gammix_d30_black_ax4u3000316g16sb3_0001" alt="RAM XPG Gammix D30" />
            <CardBody>
              <CardTitle tag="h5">XPG Gammix D30 16GB</CardTitle>
              <CardText>
                Memoria con un diseño futurista y gran rendimiento para gamers y entusiastas de PC.
              </CardText>
              <Button color="primary" a href="https://www.xpg.com/es/xpg/588">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 8 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://m.media-amazon.com/images/I/61MPuTqSwBL.jpg" alt="Corsair Vengeance RGB PRO" />
            <CardBody>
              <CardTitle tag="h5">Corsair Vengeance RGB PRO 32GB</CardTitle>
              <CardText>
                Memoria de 32GB con tecnología RGB y alto rendimiento para tareas exigentes.
              </CardText>
              <Button color="primary" a href="https://www.corsair.com/lm/es/p/memory/cmw32gx4m2e3200c16/vengeancea-rgb-pro-32gb-2-x-16gb-ddr4-dram-3200mhz-c16-memory-kit-a-black-cmw32gx4m2e3200c16?srsltid=AfmBOoqJmkCu57Bx8HZTnZH4o9VyZxigg5U1Vg85NF-fF9ieFu1syCNQ">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TodosRAM;
