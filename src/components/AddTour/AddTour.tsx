import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { observer } from 'mobx-react';
import {
  Button,
  Container,
  ContainerAdd,
  Input,
  Title,
} from "../../styled/styled";
import artistsStore from "../../store/store";


const AddTour = observer(() => {
  let navigate = useNavigate();
  const { addTour,Process,isProcess } = artistsStore;

  const locationHook = useLocation();
  const id = Number(locationHook.pathname.split("/")[2]);
  console.log(id)

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const Submit = () => {
    const tour = {
        title: name,
        location:location,
        date:date,
        photo_url:image
    };
    addTour(id,tour);
  };

  if(isProcess == 1){
    navigate(`/artist/${id}`);
    Process();
  }
  else if(isProcess == 2){
    alert('возникла ошибка')
    Process();
  }
  else{}

  return (
    <Container>
      <ContainerAdd>
        <Title>Добавить Гастроли</Title>
        <Input
          type="text"
          placeholder="Введите название концерта"
          onChange={(e) => {
            setName(String(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите место проведения"
          onChange={(e) => {
            setLocation(String(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите дату и время"
          onChange={(e) => {
            setDate(String(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите фото ввиде url"
          onChange={(e) => {
            setImage(String(e.target.value));
          }}
        />
        <Button onClick={Submit}>Добавить</Button>
      </ContainerAdd>
    </Container>
  );
});

const TitleText = styled(Title)`
  font-size: 40px;
`;

export default AddTour;
