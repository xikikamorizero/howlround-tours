import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import artistsStore from "../../store/store";
import { observer } from "mobx-react";
import { ChangeEvent, FormEvent } from "react";

const Login = observer(() => {
  let navigate = useNavigate();
  const { registration, login, isLogin } = artistsStore;

  const [logins, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  interface FormErrors {
    logins?: string;
    password?: string;
  }

  const validateInput = (): FormErrors => {
    let errors: FormErrors = {};
    if (!logins.trim()) {
      errors.logins = "Логин не может быть пустым";
    }
    if (!password.trim()) {
      errors.password = "Пароль не может быть пустым";
    }
    return errors;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "login") {
      setLogin(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    setErrors(validateInput());
  };

  const Registrarion = () => {
    const errors = validateInput();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const user = {
        username: logins,
        password: password,
      };
      registration(user);
    }
  };

  const Login = () => {
    const errors = validateInput();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const user = {
        username: logins,
        password: password,
      };
      login(user);
    }
  };

useEffect(()=>{
  if(isLogin){
    navigate('/')
  }
},[isLogin])

  return (
    <LoginContainer>
      <LoginBlock>
        <Title>Login</Title>
        <Form>
          <Input
            type="text"
            placeholder="login"
            value={logins}
            onChange={handleInputChange}
            className={errors.logins && "error"}
            name="login"
          />
          {errors.logins && <ErrorMessage>{errors.logins}</ErrorMessage>}
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleInputChange}
            className={errors.password && "error"}
            name="password"
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <ButtonContainer>
            <Button onClick={Registrarion} disabled={!!Object.keys(errors).length}>
              Регистрация
            </Button>
            <Button onClick={Login} disabled={!!Object.keys(errors).length}>
              Авторизация
            </Button>
          </ButtonContainer>
        </Form>
      </LoginBlock>
    </LoginContainer>
  );
});

const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBlock = styled.div`
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  margin-top: 10px;
  border: 2px solid silver;
  :focus {
    outline: none;
  }
  &.error {
    border-color: red;
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
const Title = styled.div`
  width: 110px;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #1d1d1d;
`;
const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  background-color: #262626;
  height: 30px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 34px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  :active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  :disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
`;
const Form = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export default Login;
