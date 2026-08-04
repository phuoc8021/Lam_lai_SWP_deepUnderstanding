import { Button, Form, InputGroup } from "react-bootstrap";

function LoginForm() {
    return (
        <div className="h-100 d-flex justify-content-center align-items-center">

            <div style={{ width: "420px" }}>

                <h2 className="fw-bold">
                    Đăng nhập tài khoản
                </h2>

                <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "14px" }}
                >
                    Vui lòng nhập thông tin của bạn để tiếp tục quản lý hệ thống.
                </p>

                <Form>

                    {/* Email */}

                    <Form.Group className="mb-3">

                        <Form.Label
                            className="fw-semibold"
                            style={{ fontSize: "13px" }}
                        >
                            TÊN ĐĂNG NHẬP
                        </Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Nhập tên đăng nhập hoặc email"
                        />

                    </Form.Group>

                    {/* Password */}

                    <Form.Group className="mb-3">

                        <div className="d-flex justify-content-between">

                            <Form.Label
                                className="fw-semibold"
                                style={{ fontSize: "13px" }}
                            >
                                MẬT KHẨU
                            </Form.Label>

                            <a
                                href="#"
                                style={{
                                    fontSize: "13px",
                                    textDecoration: "none"
                                }}
                            >
                                Quên mật khẩu?
                            </a>

                        </div>

                        <InputGroup>

                            <Form.Control
                                type="password"
                                placeholder="Mật khẩu"
                            />

                        </InputGroup>

                    </Form.Group>

                    {/* Remember */}

                    <div className="mb-4">

                        <Form.Check
                            label="Ghi nhớ đăng nhập"
                        />

                    </div>

                    {/* Login */}

                    <Button
                        className="w-100"
                        size="lg"
                    >
                        Đăng nhập
                    </Button>




                    {/* Register */}

                    <div
                        className="text-center mt-5"
                        style={{ fontSize: "14px" }}
                    >

                        Chưa có tài khoản?

                        <a
                            href="#"
                            className="ms-1" x
                            style={{ textDecoration: "none" }}
                        >
                            Đăng kí tài khoản
                        </a>

                    </div>

                </Form>

            </div>

        </div>
    );
}

export default LoginForm;