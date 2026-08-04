import { Container, Row, Col } from "react-bootstrap";

import LeftPanel from "../components/LeftPanel";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <Container fluid className="vh-100 p-0">
            <Row className="h-100 g-0">

                <Col md={6}>
                    <LeftPanel />
                </Col>

                <Col md={6}>
                    <LoginForm />
                </Col>

            </Row>
        </Container>
    );
}

export default LoginPage;