import LeftPanel from "../components/LeftPanel";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <div className="login-page">
            <LeftPanel />
            <LoginForm />
        </div>
    );
}

export default LoginPage;