import { Modal } from "antd";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/TwitterIcon";
import { SIGNUP } from "../../constants/routes";

import * as css from "./Login.styles";

const Login = () => {
  return (
    <div>
      <Modal footer={<div />} title="" open={true}>
        <css.Container>
          <TwitterIcon />
          <css.Title>Join twitter</css.Title>
          <css.Form>
            <css.Input placeholder="E-mail" />
            <css.Input placeholder="Password" />
            <css.Button>Login</css.Button>
          </css.Form>
          <css.SignupLinkSection>
            Doesn't have an account?
            <Link to={SIGNUP}>Signup</Link>
          </css.SignupLinkSection>
        </css.Container>
      </Modal>
    </div>
  );
};

export default Login;
