import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 1080px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 850px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 560px) {
    grid-template-columns: auto;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;

  display: flex;
  align-items: center;

  color: #1d1d1d;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid silver;
  :focus {
    outline: none;
    border-color: silver;
  }
`;
export const ContainerAdd = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
`;
export const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;

  cursor: pointer;

  color: white;

  margin-left: auto;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const ContainerInput = styled.div`
width: 100%;
display: flex;
align-items: center;
gap:30px;
`
export const SecondContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const SecondContainerLeft = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap:5px;
`;
export const DeleteButton = styled.div`
background-color: red;
border-radius: 5px;

padding: 5px;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 21px;

display: flex;
justify-content: center;
align-items: center;

color: #1D1D1D;

cursor: pointer;
-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
:active{
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
`;