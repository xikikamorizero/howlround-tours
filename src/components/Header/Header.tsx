import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styled/styled";
import logo from "./assets/logoP.jpg";
import artistsStore from "../../store/store";
import { observer } from "mobx-react";
import exit from "./assets/exit.png";

const Header = observer(() => {
  const { isLogin, userName, exitAccount } = artistsStore;
  let navigate = useNavigate();
  return (
    <ContainerMain>
      <ContainerHeader>
        <Logo
          image={logo}
          onClick={() => {
            navigate("/");
          }}
        />
        {isLogin ? (
          <UserNameContainer>
            {userName}
            <Exit onClick={()=>{exitAccount()}} image={exit} />
          </UserNameContainer>
        ) : (
          <Login
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Login>
        )}
      </ContainerHeader>
    </ContainerMain>
  );
});

type Props = {
  image: string;
};
const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(38, 38, 38, 0.16);

  position: fixed;
  top: 0;
  left: 0;
`;
const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 200px;
  height: 70px;
  background: url(${({ image }: Props) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200px;
  cursor: pointer;
`;
const Login = styled.div`
  border-radius: 10px;
  background-color: #262626;
  width: 70px;
  height: 30px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

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
`;
const UserNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  color: #262626;
`;

const Exit = styled.div`
  width: 20px;
  height: 20px;
  background: url(${({ image }: Props) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  cursor: pointer;
`;

export default Header;
