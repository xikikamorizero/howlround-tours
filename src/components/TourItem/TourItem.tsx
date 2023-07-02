import React from "react";
import styled from "styled-components";
import { SecondContainer, SecondContainerLeft, DeleteButton } from "../../styled/styled";
import { observer } from "mobx-react";
import artistsStore from "../../store/store";

type Props = {
  artistId?:number;
  id?:number;
  image?: string;
  name?: string;
  location?: string;
  date?: string;
};

const TourItem = observer(({ ...props }: Props) => {
  const {deleteTour, isLogin} = artistsStore;
  return (
    <ItemContaier>
      <Image image={props.image} />
      <Name>{props.name}</Name>
      <SecondContainer>
        <SecondContainerLeft>
        <Location>Локация: {props.location}</Location>
      <Date>{props.date}</Date>
        </SecondContainerLeft>
        {isLogin? <DeleteButton onClick={()=>{
          if(props.artistId && props.id){
            deleteTour(props.artistId, props.id)
          }
        }}>Удалить</DeleteButton>:null}
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
const Location = styled.div`
  font-style: normal;
  font-weight: 400;

  font-size: 14px;
  line-height: 21px;

  color: #1d1d1d;
`;
const Date = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #626262;
`;
export default TourItem;
