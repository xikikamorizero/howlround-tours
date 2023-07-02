import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { observer } from 'mobx-react';
import {
  Button,
  Container,
  ContainerAdd,
  Input,
  Title,
} from "../../styled/styled";
import styled from "styled-components";
import artistsStore from "../../store/store";

const AddArtist = observer(() => {
  let navigate = useNavigate();
  const { addArtist, isProcess, Process} = artistsStore;

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [popular, setPopular] = useState<number>(0);
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const Submit = () => {
    const artist ={
      name: name,
      genre: genre,
      popularity: popular,
      date:date,
      photo_url: image,
    };
    addArtist(artist);
  };

  if(isProcess == 1){
    navigate('/artist');
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
        <Title>Добавить Артиста</Title>
        <Input
          type="text"
          placeholder="Введите имя Артиста"
          onChange={(e) => {
            setName(String(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите жанр Артиста"
          onChange={(e) => {
            setGenre(String(e.target.value));
          }}
        />
        <Input
          type="number"
          placeholder="Введите популярность от 0 до 10"
          onChange={(e) => {
            setPopular(Number(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите дату рождения Артиста"
          onChange={(e) => {
            setDate(String(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Введите фото Артиста в виде url"
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

export default AddArtist;
