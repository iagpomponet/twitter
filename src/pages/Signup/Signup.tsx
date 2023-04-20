// Components
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/TwitterIcon";

// Constants
import { LOGIN } from "../../constants/routes";

// Styles
import * as css from "./Signup.styles";

const Signup = () => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register,
    getValues,
    handleSubmit: submit,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    const values = getValues();
    console.log("values :>> ", values);
  };

  console.log("errors :>> ", errors);

  return (
    <Modal footer={<div />} title="" open={true}>
      <css.Container>
        <TwitterIcon />
        <css.Title>Create your account</css.Title>
        <css.Form onSubmit={submit(handleSubmit)}>
          <css.Input
            {...(register("name"), { required: true })}
            placeholder="Name"
          />
          <css.Input
            {...(register("email"),
            {
              required: true,
              pattern: emailRegex as unknown as string,
            })}
            placeholder="E-mail"
          />
          <css.Input
            {...(register("password"), { required: true })}
            type="password"
            placeholder="Password"
          />

          <css.Button type="submit">Sign up</css.Button>
        </css.Form>
        <css.SignupLinkSection>
          Already have an account?
          <Link to={LOGIN}>Login</Link>
        </css.SignupLinkSection>
      </css.Container>
    </Modal>
  );
};

export default Signup;
