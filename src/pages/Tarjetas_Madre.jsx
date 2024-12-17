import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import '../assets/css/Tarjeta_Madre.css';

const Tarjetas_Madre = () => {
  return (
    <Container className="tarjetas-madre-container">
      <h1 className="tarjetas-madre-title">Tarjetas Madre</h1>
      <p className="tarjetas-madre-description">
        Encuentra las mejores tarjetas madre para optimizar tu PC. Compatibilidad garantizada con procesadores Intel y AMD.
      </p>
      <Row className="mt-4">
        {/* Card 1 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://asset.msi.com/resize/image/global/product/product_8_20200429154426_5ea9305a4b608.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
              alt="MSI MPG Z490 Gaming Edge"
            />
            <CardBody>
              <CardTitle tag="h5">MSI MPG Z490 Gaming Edge</CardTitle>
              <CardText>
                Tarjeta madre de alto rendimiento con soporte para Intel de décima generación.
              </CardText>
              <Button className="tarjetas-madre-button" a href="https://www.msi.com/Motherboard/MPG-Z490-GAMING-EDGE-WIFI">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://static.gigabyte.com/StaticFile/Image/Global/531b4cfe3985ddd59bfdd9e9ce6f9b1d/Product/25774"
              alt="Gigabyte B550 Aorus Pro"
            />
            <CardBody>
              <CardTitle tag="h5">Gigabyte B550 Aorus Pro</CardTitle>
              <CardText>
                Ideal para procesadores AMD Ryzen de tercera generación. Excelente para gaming.
              </CardText>
              <Button className="tarjetas-madre-button" a href="https://www.gigabyte.com/Motherboard/B550-AORUS-PRO-rev-10">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://dlcdnwebimgs.asus.com/gain/6BDDB156-FB29-4D59-A48D-5D386A90D579/w717/h525"
              alt="ASUS ROG Strix B450-F"
            />
            <CardBody>
              <CardTitle tag="h5">ASUS ROG Strix B450-F</CardTitle>
              <CardText>
                Tarjeta madre de la serie ROG con diseño optimizado para gamers.
              </CardText>
              <Button className="tarjetas-madre-button" a href="https://rog.asus.com/latin/motherboards/rog-strix/rog-strix-b450-f-gaming-model/">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.asrock.com/mb/photo/Z690%20Pro%20RS(L1).png"
              alt="ASRock Z690 Pro RS"
            />
            <CardBody>
              <CardTitle tag="h5">ASRock Z690 Pro RS</CardTitle>
              <CardText>
                Soporta procesadores Intel de 12.ª generación, ideal para construcciones modernas.
              </CardText>
              <Button className="tarjetas-madre-button" a href="https://www.asrock.com/mb/Intel/Z690%20Pro%20RS/index.la.asp">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tarjetas_Madre;
