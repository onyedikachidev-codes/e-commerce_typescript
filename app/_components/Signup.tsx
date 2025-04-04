import Button from "@/app/_components/Button";
import SignupForm from "@/app/_components/SignupForm";
import Modal from "@/app/_components/Modal";

function Signup() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="signup-form">
          <Button onClick={() => console.log("clicked")} type="signup">
            Register
          </Button>
        </Modal.Open>
        <Modal.Window name="signup-form">
          <SignupForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Signup;
