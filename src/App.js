import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';

import './App.css';
import { ListGroup } from 'react-bootstrap';
import NewsList from './components/newslist.js';

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
                    {/* <Nav>
                        <Nav.Item>
                            <Nav.Link href="#news">お知らせ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#overview">真秀書院について</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#classroom">仙台教室</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#online">オンライン教室</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                </Container>
            </header>

            <main>
                <Container fluid="lg">
                    <NewsList />
                    <Row className="mt-5">
                        <h2 id="overview" className="pb-4">真秀書院について</h2>
                        <Col md="6" sm="12" className="p-0">
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
                    <Row className="flex-wrap-reverse">
                        <Col md="6" sm="12" className="d-flex align-items-center justify-content-center p-3 bg-azuki text-light">
                            <div>
                                <h3>子どもから大人まで</h3>
                                <p>当教室では子どもから大人の方まで幅広くお稽古をいたします。<br />
                                大人の方なら趣味でペン字を始めて作品の出品を目指してみる、<br />お子様であれば普段の漢字ドリルを使って綺麗な字を書く練習をするなど、柔軟に対応しております。</p>
                            </div>
                        </Col>
                        <Col md="6" sm="12" className="p-0">
                            <Image fluid src="./image/img_02.JPG"/>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <h2 id="classroom" className="pb-4">仙台教室</h2>
                        <p>仙台市宮城野区教室 最寄りのJR陸前原ノ町駅から徒歩5分</p>
                        <p>※ 防犯上の観点から住所は<a target="_blank" rel="noreferrer" href="https://forms.gle/EvwyxgAZ39TzkEr87">お問い合わせ<Icon.BoxArrowUpRight /></a>の際に別途ご連絡いたします。</p>
                        <p>
                            教育部<br />
                            小学生〜中学生<br />
                            お月謝3500円/月〜<br />
                            一般部<br />
                            高校生〜社会人<br />
                            お月謝4500円/月〜
                        </p>
                    </Row>
                    <Row className="py-5 bg-invert">
                        <h2 id="online" className="pb-4">オンライン教室</h2>
                        <p>オンラインでも教室を実施</p>
                        <ul className="mx-auto col-sm-8 col-md-7 li-style-dots">
                            <li>結婚式などの熨斗のお手本</li>
                            <li>単発のお稽古</li>
                            <li>定期的にお稽古をする通信講座 などなど</li>
                        </ul>
                        <p>1回のみ、定期的なお稽古などご要望にお答えします。詳細はお問い合わせください</p>
                    </Row>
                    <Row className="py-5">
                        <h2 id="contact" className="pb-4">お問い合わせ</h2>
                        <p>お稽古についてのお問い合わせは<a target="_blank" rel="noreferrer" href="https://forms.gle/EvwyxgAZ39TzkEr87">こちら<Icon.BoxArrowUpRight /></a>から</p>
                    </Row>
                </Container>
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
                                <a href="https://www.instagram.com/shinshu.tsubaki/"><li><Icon.Instagram /> Instagram</li></a>
                                {/* <li><Icon.Mailbox2 /> Mail: shinshu.syoin@gmail.com</li> */}
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
