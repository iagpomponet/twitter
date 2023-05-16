// Components
import { Alert, Modal, Spin } from "antd";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/TwitterIcon";

// Hooks
import { useCreateUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

// Constants
import { LOGIN, FEED } from "../../constants/routes";

// Styles
import * as css from "./Signup.styles";

// Types
import { UserPayload } from "../../services/user/types";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const {
    mutate: createUser,
    isLoading: createUserLoading,
    isSuccess: createUserSuccess,
    error,
  } = useCreateUser();
  const { register, getValues, handleSubmit: submit } = useForm();

  const handleSubmit = () => {
    const values = getValues();

    createUser(values as UserPayload);
  };

  console.log(
    "error.response.data :>> ",
    (error as any)?.response?.data?.message
  );

  useEffect(() => {
    if (createUserSuccess) {
      navigate(FEED);
    }
  }, [createUserSuccess]);

  const Form = () => {
    return (
      <css.Form onSubmit={submit(handleSubmit)}>
        <css.Input
          {...register("fullName", { required: true })}
          placeholder="Full name"
        />
        <css.Input
          {...register("username", { required: true })}
          placeholder="Username"
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

        {error ? (
          <Alert
            message={(error as any)?.response?.data?.message as string}
            type="error"
          />
        ) : null}

        <css.Button type="submit">Sign up</css.Button>
      </css.Form>
    );
  };

  return (
    <Modal footer={<div />} title="" open={true}>
      <css.Container>
        <TwitterIcon />
        <css.Title>Create your account</css.Title>
        {createUserLoading ? (
          <css.LoadingContainer>
            <Spin />
          </css.LoadingContainer>
        ) : (
          <Form />
        )}
        <css.SignupLinkSection>
          Already have an account?
          <Link to={LOGIN}>Login</Link>
        </css.SignupLinkSection>
      </css.Container>
    </Modal>
  );
};

export default Signup;
