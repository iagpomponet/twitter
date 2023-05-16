import { Alert, Modal, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from "../../assets/TwitterIcon";
import { SIGNUP } from "../../constants/routes";

import * as css from "./Login.styles";
import { useForm } from "react-hook-form";
import { useAuthUser } from "../../services/user";
import { LoginPayload } from "../../services/user/types";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {
    mutate: authUser,
    isLoading: authLoading,
    isSuccess: authSuccess,
    error,
  } = useAuthUser();
  const { register, handleSubmit: submit, getValues } = useForm();

  useEffect(() => {
    if (authSuccess) {
      navigate("/");
    }
  }, [authSuccess]);

  const handleSubmit = async () => {
    const values = getValues();

    authUser(values as LoginPayload);
  };

  const Form = () => {
    return (
      <css.Form onSubmit={submit(handleSubmit)}>
        <css.Input
          {...register("email", { required: true })}
          placeholder="E-mail"
        />
        <css.Input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        {error ? (
          <Alert
            message={(error as any)?.response?.data?.error as string}
            type="error"
          />
        ) : null}
        <css.Button>Login</css.Button>
      </css.Form>
    );
  };

  return (
    <div>
      <Modal footer={<div />} title="" open={true}>
        <css.Container>
          <TwitterIcon />
          <css.Title>Join twitter</css.Title>
          {authLoading ? (
            <css.LoadingContainer>
              <Spin />
            </css.LoadingContainer>
          ) : (
            <Form />
          )}
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
