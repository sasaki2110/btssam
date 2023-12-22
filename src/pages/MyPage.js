import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "../components/MyNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// お知らせエリア
function MyNotifications() {


    // このリストを、本来はAPIで取得する
    var notifications = [
        {
            "notificationId": "0002",
            "date": "2023/11/21",
            "title": "トランクルーム CUBE 秋葉原店 2024/01 ご請求確定のお知らせ",
            "content": "...",
            "hasOpened": true
        },
        {
            "notificationId": "0001",
            "date": "2023/11/20",
            "title": "トランクルーム CUBE 秋葉原店 ご利用開始",
            "content": "...",
            "hasOpened": true
        },
    ];
      
    return (
        <Container>
            <hr/>
            <h3>お知らせ</h3>

            { notifications.map((notification) => (
                <Row>
                    <label>{notification.date}</label>
                    <label>{notification.title}</label>
                </Row>
            ))}

        </Container>
    )
}

// 契約情報エリア
function MyContracts() {

    var contracts = [
        {
            "contractId": "contract_id",
            "customerType": "COMPANY",
            "branchName": "CUBE 秋葉原店",
            "roomName": "Room1",
            "size": "1.0 帖 / 1.66 ㎡",
            "from": "2023/11/20",
            "priceMonth": 16200,
            "priceManagement": 2200,
            "totalPrice": 18220
        },
    ];

    return (
        <Container>
            <hr/>
            <h3>ご利用中のトランクルーム</h3>

            {contracts.map((contract) => (
                <Container>
                <Row xs={1} md={3}>
                    <Col>ここはイメージ</Col>
                    <Col>
                        <Row xs={1} md={2}>
                            <Col>店舗名</Col>
                            <Col>{contract.branchName}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>部屋番号</Col>
                            <Col>{contract.roomName}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>広さ</Col>
                            <Col>{contract.size}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>ご利用開始日</Col>
                            <Col>{contract.from}</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xs={1} md={2}>
                            <Col>利用区分</Col>
                            <Col>{contract.customerType}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>月額料金</Col>
                            <Col>{contract.priceMonth}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>管理費</Col>
                            <Col>{contract.priceManagement}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>合計月額料金</Col>
                            <Col>{contract.totalPrice}</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><Button>契約書をダウンロード</Button></Col>
                    <Col><Button>利用規約をダウンロード</Button></Col>
                </Row>
                </Container>
            ))}
            
        </Container>
    )
}

// 支払情報エリア
function MyPayments() {

    var payments = [
        {
            "paymentId": "xxx",
            "branchName": "CUBE 秋葉原店",
            "roomName": "Room1",
            "target": "2024/01",
            "dueDate": "2024/12/31",
            "status": "PAID"
        },
        {
            "paymentId": "xxx",
            "branchName": "CUBE 秋葉原店",
            "roomName": "Room1",
            "target": "2024/01",
            "dueDate": "2024/12/31",
            "status": "PAID"
        },
        {
            "paymentId": "xxx",
            "branchName": "CUBE 秋葉原店",
            "roomName": "Room1",
            "target": "2024/01",
            "dueDate": "2024/12/31",
            "status": "PAID"
        },
    ];

    return (
        <Container>
            <hr/>
            <h3>お支払い</h3>

            <Table>
                <thead>
                    <tr>
                        <th><label>店舗名</label></th>
                        <th><label>お部屋番号</label></th>
                        <th><label>利用月</label></th>
                        <th><label>お支払期限</label></th>
                        <th><label>状態</label></th>
                        <th><label>請求書発行</label></th>
                        <th><label>領収書発行</label></th>
                    </tr>
                </thead>

                <tbody>
                    { payments.map((payment) => (
                        <tr>
                            <td>{payment.branchName}</td>
                            <td>{payment.roomName}</td>
                            <td>{payment.target}</td>
                            <td>{payment.dueDate}</td>
                            <td>{payment.status}</td>
                            <td><Button>請求書発行</Button></td>
                            <td><Button>領収書発行</Button></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </Container>
    )
}

// 顧客情報エリア
function Me() {
    var me = {
        "customerId": "customer_id",
        "customerType": "COMPANY",
        "customerPhone": "090-1234-1234",
        "customerEmail": "abcdefg@example.com",
        "customerAddress": "...",
        "companyName": "株式会社◯◯",
        "companyPhone": "090-1234-1234",
        "companyAddress": "東京都〇〇区〇〇１−１−１",
    };

    return (
        <Container>
            <hr/>
            <h3>お客様情報</h3>

            <Container>
                <Row xs={1} md={3}>
                    <Col>ここはイメージ</Col>
                    <Col>
                        <Row xs={1} md={2}>
                            <Col>氏名</Col>
                            <Col>{me.customerId}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>連絡先</Col>
                            <Col>{me.customerPhone}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>メールアドレス</Col>
                            <Col>{me.customerEmail}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>住所</Col>
                            <Col>{me.customerAddress}</Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xs={1} md={2}>
                            <Col>利用区分</Col>
                            <Col>{me.customerType}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>法人名</Col>
                            <Col>{me.companyName}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>法人連絡先</Col>
                            <Col>{me.companyPhone}</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col>法人住所</Col>
                            <Col>{me.companyAddress}</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><Button>お客様情報の変更</Button></Col>
                </Row>
            </Container>

        </Container>
    )
}

function MyPage() {
  return (
    <Container>
      {/* 外だしした自前のナビケーションバー */}
      <MyNavbar />

      <h2>マイページ</h2>
            
      {/* お知らせエリア */}
      <MyNotifications />

      {/* 契約情報エリア */}
      <MyContracts />

      {/* 支払情報エリア */}
      <MyPayments />

      {/* 顧客情報エリア */}
      <Me />
    
    </Container>
  );
}
export default MyPage;