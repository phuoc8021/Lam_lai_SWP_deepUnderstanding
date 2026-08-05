import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { loginApi } from "../../../api/auth.api";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await loginApi({
                username,
                password
            });

            console.log("Login Success:", response);

            alert("Đăng nhập thành công!");

            // Bước sau sẽ lưu JWT
            // localStorage.setItem("accessToken", response.accessToken);

        } catch (error) {

            console.error(error);

            alert("Sai tên đăng nhập hoặc mật khẩu!");

        } finally {

            setLoading(false);

        }

    };

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

                <Form onSubmit={handleLogin}>

                    {/* Username */}

                    <Form.Group className="mb-3">

                        <Form.Label
                            className="fw-semibold"
                            style={{ fontSize: "13px" }}
                        >
                            TÊN ĐĂNG NHẬP
                        </Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>

                    {/* Register */}

                    <div
                        className="text-center mt-5"
                        style={{ fontSize: "14px" }}
                    >

                        Chưa có tài khoản?

                        <a
                            href="#"
                            className="ms-1"
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