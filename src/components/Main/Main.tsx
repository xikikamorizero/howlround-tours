import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styled/styled";
import styled from "styled-components";

const Main = () => {
  let navigate = useNavigate();

  const [animate, setAnimation] = useState(false);
  
  return (
    <Container>
      <MainContainer>
        <Glases style={animate?{width:'30vh', height:'30vh'}:{}}>
          <Title
            onClick={() => {
              navigate("/artist");
            }}
            onMouseOver={()=>{
                setAnimation(true)
            }}
            onMouseOut={()=>{
                setAnimation(false)
            }}
          >
            Get Started
          </Title>
        </Glases>
      </MainContainer>
    </Container>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Glases = styled.div`
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vh;
  height: 60vh;
  background-color: #547b7784;

  transition: all 0.3s;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
const Title = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: #393838;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #393838;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  transition: all 0.5s;

  :hover {
    color: white;
  }
  :active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;

export default Main;
