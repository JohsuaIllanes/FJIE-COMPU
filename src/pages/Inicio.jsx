import React from 'react';
import { Container, Row, Col, Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Inicio.css';

const items = [
  {
    src: 'https://www.clarin.com/2023/08/30/7US4vuyNU_360x240__1.jpg', // Cambia estas URL por tus imágenes
    altText: 'Imagen 1',
    caption: 'Explora procesadores de última generación',
  },
  {
    src: 'https://elchapuzasinformatico.com/wp-content/uploads/2016/11/Asus-ROG-Strix-Z270E-1.png',
    altText: 'Imagen 2',
    caption: 'Encuentra las mejores tarjetas madre para tu PC',
  },
  {
    src: 'https://gamerpc.es/wp-content/uploads/2019/01/mejores-memorias-ram.jpg',
    altText: 'Imagen 3',
    caption: 'Memoria RAM de alta velocidad para tu computadora',
  }
];

const Inicio = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  }

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  }

  return (
    <Container className="inicio-container">
      {/* Carousel */}
      <Row className="justify-content-center mb-4">
        <Col md="8" className="text-center">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {items.map((item) => (
              <CarouselItem key={item.src}>
                <img src={item.src} alt={item.altText} className="d-block w-100" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
      </Row>

      {/* Contenido del Inicio */}
      <Row className="justify-content-center">
        <Col md="8" className="text-center">
          <h1 className="inicio-title">Bienvenido a FJIE</h1>
          <p className="inicio-description">
            Explora nuestra selección de productos y componentes de PC gaming.
            Encuentra lo mejor en procesadores, tarjetas madre, RAM y más.
          </p>
          <Link to="/Procesadores">
            <Button color="primary">Explorar Procesadores</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;

