import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

import './App.css';
import { ListGroup } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <header>
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
            </header>
            <main>
                <Row className="py-3">
                    <h2 id="overview" className="pb-4">真秀書院について</h2>
                    <Col>
                        <Image fluid src="./image/img_01.JPG"/>
                    </Col>
                    <Col md="6" sm="12" className="d-flex align-items-center justify-content-center p-3 bg-ebizome text-light">
                        <div>
                            <h3>ペン字教室</h3>
                            <p>PCやスマホが普及した現代でも、文字を書く機会はなくなりません。<br />
                            そんな普段の字を美しくしたり、綺麗な字を書くことを趣味にしてみませんか？</p>
                        </div>
                    </Col>
                </Row>
                <Row className="py-3 flex-wrap-reverse">
                    <Col md="6" sm="12" className="py-3 bg-azuki text-light">
                        <h3>子どもから大人まで</h3>
                        <p>当教室では子どもから大人の方まで幅広くお稽古をいたします。<br />
                        大人の方なら趣味でペン字を始めて作品の出品を目指してみる、<br />お子様であれば普段の漢字ドリルを使って綺麗な字を書く練習をするなど、柔軟に対応いたします。</p>
                    </Col>
                    <Col md="6" sm="12">
                        <Image fluid src="./image/img_02.JPG"/>
                    </Col>
                </Row>
                <Row className="py-3 bg-invert">
                    <h2 id="classroom" className="pb-4">仙台教室</h2>
                    <p>仙台市宮城野区教室 最寄りのJR陸前原ノ町駅から徒歩3分</p>
                </Row>
                <Row className="py-3">
                    <h2 id="online" className="pb-4">オンライン教室</h2>
                    <p>オンラインでも教室を実施</p>
                </Row>
            </main>
            <footer className="p-4 bg-footer text-light">
                <Container>
                    <Row>
                        <Col>
                            <h3>真秀書院</h3>
                            <p>仙台市宮城野区教室</p>
                        </Col>
                        <Col>
                            <ul className="li-style-none">
                                <li><Icon.Twitter /> Twitter</li>
                                <li><Icon.Instagram /> Instagram</li>
                                <li><Icon.Mailbox2 /> Mail</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <small>&copy; 真秀書院</small>
            </footer>
        </div>
    );
}

export default App;
