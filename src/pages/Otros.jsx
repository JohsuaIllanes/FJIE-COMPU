import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import '../assets/css/Otros.css';

const Otros = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  
  // Estado del acordeón
  const [open, setOpen] = useState(''); // Por defecto, ningún ítem está abierto

  const toggle = (id) => {
    setOpen(open === id ? '' : id); // Si el ítem está abierto, lo cierra; si no, lo abre
  };

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const items = [
    {
      src: 'https://i.pinimg.com/736x/bf/3e/f8/bf3ef8ec6fa9e3553c900608d9c52486.jpg',
      altText: 'Producto 1',
      caption: '',
    },
    {
      src: 'https://wallpapers.com/images/hd/neon-green-razer-gaming-laptop-logo-89czhraw8otpnlws.jpg',
      altText: 'Producto 2',
      caption: '',
    },
    {
      src: 'https://w0.peakpx.com/wallpaper/944/108/HD-wallpaper-logitech-g-lightblue-blue-brand-dark-g102-gaming-logitechg-logo-mouse-peripherals.jpg',
      altText: 'Producto 3',
      caption: '',
    },
  ];

  return (
    <Container className="otros-container">
      <h1 className="otros-title">Otros Componentes de PC</h1>
      <p className="otros-description">
        Explora componentes adicionales para tu PC como tarjetas gráficas, fuentes de alimentación y más.
      </p>

      {/* Carousel */}
      <Carousel activeIndex={activeIndex} next={next} previous={previous} onExiting={onExiting} onExited={onExited}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
        {items.map((item, index) => (
          <CarouselItem key={index} onExiting={onExiting} onExited={onExited}>
            <img src={item.src} alt={item.altText} />
            <div className="carousel-caption">{item.caption}</div>
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <Row className="mt-5">
        {/* Tarjeta Gráfica */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/VGA-2020/image/KV-3070png.png"
              alt="MSI GeForce RTX 3070"
            />
            <CardBody>
              <CardTitle tag="h5">MSI GeForce RTX 3070</CardTitle>
              <CardText>
                Potente tarjeta gráfica para gamers y profesionales de la creación de contenido.
              </CardText>
              <Button className="otros-button" href="https://es.msi.com/Graphics-Card/GeForce-RTX-3070-GAMING-X-TRIO" target="_blank">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Fuente de Alimentación */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://m.media-amazon.com/images/I/81xG30LoFOL.jpg"
              alt="Cooler Master MWE 750W"
            />
            <CardBody>
              <CardTitle tag="h5">Cooler Master MWE 750W</CardTitle>
              <CardText>
                Fuente de alimentación eficiente con certificación 80 Plus Platinum.
              </CardText>
              <Button className="otros-button" href="https://www.coolermaster.com/en-global/products/mwe-750-bronze-v2/" target="_blank">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Sistema de Refrigeración */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://tecnogaming.com/wp-content/uploads/2024/07/nh_d15_g2_1_1_1.jpg"
              alt="Noctua NH-D15"
            />
            <CardBody>
              <CardTitle tag="h5">Noctua NH-D15</CardTitle>
              <CardText>
                Uno de los mejores sistemas de refrigeración para CPUs, con un rendimiento excepcional.
              </CardText>
              <Button className="otros-button" href="https://noctua.at/es/nh-d15.html" target="_blank">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>

        {/* Memoria RAM */}
        <Col md="3" className="mb-4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://m.media-amazon.com/images/I/51Y7ugfDRWS._AC_UF894,1000_QL80_.jpg"
              alt="Corsair Vengeance LPX"
            />
            <CardBody>
              <CardTitle tag="h5">Corsair Vengeance LPX 32GB</CardTitle>
              <CardText>
                Memoria RAM de alta velocidad y bajo perfil, ideal para gaming y overclocking.
              </CardText>
              <Button className="otros-button" href="https://www.corsair.com/us/en/p/memory/cmk16gx4m2b3200c16/vengeancea-lpx-16gb-2-x-8gb-ddr4-dram-3200mhz-c16-memory-kit-black-cmk16gx4m2b3200c16?srsltid=AfmBOoqRfSJhFeTSSmSE8tUN3Ns7hXu-V9CAWYnSl2EbtDMAZStvr5aB" target="_blank">Ver detalles</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Accordion */}
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Acordeón Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Contenido del ítem 1.</strong> INFO
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Acordeón Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>Contenido del ítem 2.</strong> INFO
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Acordeón Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>Contenido del ítem 3.</strong> INFO
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Otros;
