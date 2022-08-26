import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Icon from 'react-bootstrap-icons';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react';

import { client } from '../libs/client';

export const getStaticProps = async () => {
  const data = await client.get({endpoint: "blogs"});

  return {
    props: {
      blog: data.contents,
    }
  }
}

export default function NewsList({ blog }) {
  return (
    <Row className="my-5 px-4">
      <h2>お知らせ</h2>
      <ListGroup variant="flush">
        {blog.map((blog) => (
          <ListGroup.Item>
            <Row>
              <Link href={`/blog/${blog.id}`}>
                <Col md="2">日付ここに</Col>
                <Col>{ blog.title }</Col>
              </Link>
            </Row>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <Row>
            <Col md="2">
              2022/05/12 <span className="badge bg-success">イベント</span>
            </Col>
            <Col>
              5/28(土)に仙台市宮城野区でペン字教室無料体験会を実施します！ 参加希望の場合は<a target="_blank" rel="noreferrer" href="https://forms.gle/EvwyxgAZ39TzkEr87">お問い合わせ<Icon.BoxArrowUpRight /></a>からお問い合わせください。
            </Col>
          </Row>
        </ListGroup.Item>
         
      </ListGroup>
    </Row>
  );
}