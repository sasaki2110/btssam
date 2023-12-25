import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import MyNavbar from '../components/MyNavBar';

// メインアプリケーション
function Strage() {
  const navigate = useNavigate();

  function handleClickReserv(roomno) {
    navigate("/reserv");
  }

  var rooms = [
    {"roomno":1, "extent":"1.0畳 / 1.66㎡", "fee":"18,700円"},
    {"roomno":2, "extent":"1.1畳 / 1.72㎡", "fee":"19,800円"},
    {"roomno":3, "extent":"1.2畳 / 1.82㎡", "fee":"20,800円"},
    {"roomno":4, "extent":"1.3畳 / 1.92㎡", "fee":"21,800円"},
  ];

  return (
    <div>
      
    {/* 外だしした自前のナビケーションバー */}
    <MyNavbar />
    
    {/* 店舗情報エリア */}
    <Container> 
      <Row xs={1}>
        <label>トランクルームサンプル</label>
      </Row>
      <Row xs={1} md={2}>
        <Col>
          <Carousel>
            <Carousel.Item>
              <Image
                src="https://bucksam1.s3.amazonaws.com/sinagawa1.png"
                fluid
              >
              </Image>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://bucksam1.s3.amazonaws.com/sinagawa3.jpg"
                fluid
              >
              </Image>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://bucksam1.s3.amazonaws.com/sinagawa5.jpg"
                fluid
              >
              </Image>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4012566583356!2d139.80864417476812!3d35.667120669996976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018890082b85bc3%3A0xcf533b02ac169ede!2z44Ki44OR44Ob44OG44Or44CI5p2x5Lqs5pyo5aC044CJ!5e0!3m2!1sja!2sjp!4v1701843061344!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map" 
          width="100%" height="426px"></iframe>
        </Col>
      </Row>
      <Row xs={1} md={2}> 
        <Col>
        </Col>
        <Col>
          <Stack>
            <label>アクセス</label>
            <label>住所</label>
            <label>電話番号　などの情報を列記</label>
          </Stack>
        </Col>
      </Row>
    </Container>

    {/* 部屋情報エリア */}
    <Container> 
      <Row>
        <Col>
          トランクルーム空き室一覧
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <Image
               src="https://bucksam1.s3.amazonaws.com/small-pc.png"
               fluid
          />
        </Col>
        <Col sm={8}>
          <Table>
            <thead>
              <tr>
                <th>
                  <label>広さ</label>
                </th>
                <th>
                  <label>月額利用料（税込）</label>
                </th>
                <th>
                  <label>操作</label>
                </th>
              </tr>
            </thead>
            <tbody>
              { rooms.map((room) => (
                <tr>
                  <td>
                    <label>{room.extent}</label>
                  </td>
                  <td>
                    <label>{room.fee}</label>
                  </td>
                  <td>
                    <Button variant="outline-primary" onClick={() => handleClickReserv(room.roomno)} >
                      見学
                    </Button>
                    　
                    <Button variant="outline-primary">
                      契約
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default Strage;
