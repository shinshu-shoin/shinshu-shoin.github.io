import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
    return (
        <div className="App">
            <Container fluid="lg">
                <Row className="flex-nowrap justify-content-between align-items-center py-3 border-bottom">
                    <Col>
                        <h1>真秀書院</h1>
                    </Col>
                </Row>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#overview">真秀書院について</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#classroom">仙台教室</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#online">オンライン教室</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default App;
