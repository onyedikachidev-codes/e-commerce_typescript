import Button from "./Button";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

function Login() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="login-form">
          <Button onClick={() => console.log("clicked")} type="login">
            Login
          </Button>
        </Modal.Open>
        <Modal.Window name="login-form">
          <LoginForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Login;
