import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import CadastroArtista from './pages/CadastroArtista';

function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SpotiMan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Cadastro" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/cadastro-artista">Artista</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Albúm
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Playlist
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">Relatório</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cadastro-artista' element={<CadastroArtista />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
