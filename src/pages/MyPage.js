import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "../components/MyNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React , {useState, useEffect} from 'react'
import axios from 'axios'
import {withAuthenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from 'aws-amplify/utils';

// お知らせAPI呼び出し
function getNotifications(setNotifications) {
    const handleSubmission = async (event) => {
    try {
        await axios
          .get(
            'https://akqjc7swnl.execute-api.ap-southeast-2.amazonaws.com/default/getNodifications?customerId=12345',
            event,
            {
              headers: {
                'Content-type': 'text/json',
              },
            },
          )
          .then((res) => {
            // 終わったら画面レンダリングするために、ステートに値をセット
            setNotifications(res['data']);
          })
      } catch (err) {
        console.error(err)
        alert('[ERROR] POSTに失敗しました。')
      }
    }

    handleSubmission();
}

// お知らせエリア
function MyNotifications() {
    // APIの結果を格納するステート
    const [notifications, setNotifications] = useState(null);

    // API呼び出し（副作用があるのでuseEffect内で）
    useEffect(() => {
        getNotifications(setNotifications);
    }, []);

    // まだステートが無い（非同期APIが終わっていない）場合はリターン
    if(!notifications) return;

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
//export default withAuthenticator(MyPage);

