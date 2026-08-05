import { Container, Row, Col } from "react-bootstrap";

import LeftPanel from "../components/LeftPanel";
import LoginForm from "../components/LoginForm";

import "../styles/login.css";

function LoginPage() {
    return (
        <Container fluid className="login-page p-0">

            <Row className="h-100 g-0">

                {/* Left Side */}
                <Col xs={12} lg={5} className="left-side">
                    <LeftPanel />
                </Col>

                {/* Right Side */}
                <Col xs={12} lg={7} className="right-side">
                    <LoginForm />
                </Col>

            </Row>

        </Container>
    );
}

export default LoginPage;