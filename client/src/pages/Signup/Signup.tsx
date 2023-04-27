// Components
import { Modal, Spin } from "antd";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/TwitterIcon";

// Constants
import { LOGIN } from "../../constants/routes";

// Styles
import * as css from "./Signup.styles";
import { useCreateUser } from "../../services/user";
import { UserPayload } from "../../services/user/types";

const Signup = () => {
  const { mutate: createUser, isLoading: createUserLoading } = useCreateUser();
  const {
    register,
    getValues,
    handleSubmit: submit,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    const values = getValues();

    console.log('values :>> ', values);
    console.log('errors :>> ', errors);

    createUser(values as UserPayload);
  };

  const Form = () => {
      return <css.Form onSubmit={submit(handleSubmit)}>
          <css.Input
            {...register("name", { required: true })}
            placeholder="Name"
          />
          <css.Input
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          <css.Input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />

          <css.Button type="submit">Sign up</css.Button>
        </css.Form>
  }

  return (
    <Modal footer={<div />} title="" open={true}>
      <css.Container>
        <TwitterIcon />
        <css.Title>Create your account</css.Title>
        {createUserLoading ? <css.LoadingContainer><Spin /></css.LoadingContainer> : <Form />}
        <css.SignupLinkSection>
          Already have an account?
          <Link to={LOGIN}>Login</Link>
        </css.SignupLinkSection>
      </css.Container>
    </Modal>
  );
};

export default Signup;
