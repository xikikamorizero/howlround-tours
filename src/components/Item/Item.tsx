import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import {
  SecondContainer,
  SecondContainerLeft,
  DeleteButton,
} from "../../styled/styled";
import artistsStore from "../../store/store";

type Props = {
  id?: number;
  image?: string;
  name?: string;
  genre?: string;
  date?:string;
  popular?: number;
};

const Item = observer(({ ...props }: Props) => {
  let navigate = useNavigate();
  const { deleteArtist, isLogin } = artistsStore;

  const Submit = (id: number) => {
    navigate(`/artist/${props.id}`);
  };

  return (
    <ItemContaier>
      <Image
        image={props.image}
        onClick={() => {
          if (props.id) {
            Submit(props.id);
          }
        }}
      />
      <Name>{props.name}</Name>
      <SecondContainer>
        <SecondContainerLeft>
          <Genre>{props.genre}</Genre>
          <Popular>Рейтинг:{props.popular}</Popular>
          <Popular>{props.date}</Popular>
        </SecondContainerLeft>
        {isLogin? <DeleteButton
          onClick={() => {
            props.id && deleteArtist(props.id);
          }}
        >
          Удалить
        </DeleteButton>: null}
      </SecondContainer>
    </ItemContaier>
  );
});

const ItemContaier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Image = styled.div`
  width: 100%;
  height: 256px;

  background: url(${({ image }: Props) => (image ? image : "")});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s;

  cursor: pointer;
  :hover {
    -webkit-box-shadow: 0px 20px 30px 6px rgba(9, 9, 9, 0.2);
    -moz-box-shadow: 0px 20px 30px 6px rgba(9, 9, 9, 0.2);
    box-shadow: 0px 20px 30px 6px rgba(9, 9, 9, 0.2);
  }
`;
const Name = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
`;
const Genre = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #9a96a2;
`;
const Popular = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #626262;
`;
export default Item;
