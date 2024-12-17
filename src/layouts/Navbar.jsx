import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

function NavbarComponent() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">FJIE</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/" className="nav-link">Inicio</Link>
        </NavItem>
        <NavItem>
          <Link to="/procesadores" className="nav-link">Procesadores</Link>
        </NavItem>
        <NavItem>
          <Link to="/ram" className="nav-link">RAM</Link>
        </NavItem>
        <NavItem>
        <Link to="/Tarjetas_Madre" className='nav-link'>Tarjetas Madre</Link>
        </NavItem>
        <NavItem>
          <Link to="/otros" className="nav-link">Otros</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;

