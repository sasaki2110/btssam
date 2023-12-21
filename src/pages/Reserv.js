import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

function Reserv() {

    const navigate = useNavigate();

    function handleSumbit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        alert(form.get("email"));
        navigate('/reservcheck', { state: { form: {form} } });
    }

  return (
    <Container>
        予約画面
      <Form onSubmit={handleSumbit}>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
            メールアドレス
            </Form.Label>
            <Col sm={10}>
            <Form.Control required type="email" placeholder="Email" name="email"/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
            パスワード
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password" name="password"/>
            </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}  className="mb-3">
            <Form.Label as="legend" column sm={2}>
                個人・法人
            </Form.Label>
            <Col>
                <Form.Check
                    inline
                    type="radio"
                    label="個人"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    inline
                    type="radio"
                    label="法人"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
            </Col>
            </Form.Group>
            
            <Form.Group as={Row}  className="mb-3">
                <Form.Label column sm={2}>
                お名前
                </Form.Label>
                <Col sm={10}>
                <Form.Control required placeholder="山田　太郎" name="name"/>
                </Col>
            </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">ログイン</Button>
            </Col>
        </Form.Group>
        </Form>
    </Container>
  );
}

export default Reserv;