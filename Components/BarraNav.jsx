

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const BarraNav = () => {
   let CompanyName = 'Antigüedades Casilda';
    return (
        <div  style={{ backgroundColor: ''}}>
        <Navbar  >
          <Container >
            <Navbar.Brand  href="#home">{CompanyName} </Navbar.Brand>
                       <Navbar.Brand href="#AboutUs"> Nosotros </Navbar.Brand>
            <Navbar.Brand href="#Gallery"> Galeria </Navbar.Brand>
            <Navbar.Brand>
                
            </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        
      );
}
export default BarraNav;