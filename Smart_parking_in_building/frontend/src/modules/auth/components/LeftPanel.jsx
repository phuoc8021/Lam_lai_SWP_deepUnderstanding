import logo from "../../../assets/images/logo.svg";

function LeftPanel() {
    return (
        <div
            className="h-100 d-flex flex-column text-white p-5"
            style={{ backgroundColor: "#131C2F" }}
        >
            {/* Logo */}
            <div>
                <img
                    src={logo}
                    alt="SmartPark Logo"
                    style={{
                        width: "140px",
                        height: "auto",
                    }}
                />
            </div>

            {/* Content */}
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1
                    className="fw-bold"
                    style={{
                        fontSize: "48px",
                        lineHeight: "60px",
                    }}
                >
                    Quản lý đỗ xe thông minh
                    <br />
                    với độ chính xác tuyệt đối.
                </h1>

                <p
                    className="mt-4"
                    style={{
                        fontSize: "18px",
                        maxWidth: "500px",
                        color: "#B8C0CC",
                        lineHeight: "30px",
                    }}
                >
                    Hệ thống ParkSmart sử dụng công nghệ
                    <strong> "Precision Flow"</strong> giúp tối ưu hóa
                    luồng giao thông và quản lý bãi đỗ xe tự động theo
                    thời gian thực.
                </p>
            </div>

            {/* Footer */}
            <div
                style={{
                    color: "#8E98A8",
                    fontSize: "14px",
                }}
            >
                © 2024 ParkSmart International.&nbsp;&nbsp;
                Chính sách bảo mật.&nbsp;&nbsp;
                Điều khoản dịch vụ.
            </div>
        </div>
    );
}

export default LeftPanel;