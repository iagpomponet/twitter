import styled from "styled-components";

export const Title = styled.h4`
  font-size: 31px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 364px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;

  svg {
    width: 40px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  height: 40px;
  width: 100%;
  font-size: 15px;
  padding: 12px 8px 8px;
  border: 1px solid #e1e8ed;
`;

export const Button = styled.button`
  margin-top: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 15px;
  width: 100%;
  height: 40px;
  padding: 0;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

export const SignupLinkSection = styled.div`
  max-width: 364px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  gap: 4px;
  text-align: left;
  justify-content: flex-start;
`;
