import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

// ナビゲーションバー
// メインの中にあると見づらいから外だし
function MyNavbar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/mypage">マイページ</Nav.Link>
              <Nav.Link href="#link">リンク</Nav.Link>
              <NavDropdown title="プルダウン" id="basic-nav-dropdown">
                <NavDropdown.Item href="/memberspage">会員専用ページ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">サンプル２</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  サンプル３
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default MyNavbar;