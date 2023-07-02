import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  ContainerGrid,
  Title,
  Input,
  ContainerInput,
  Button,
} from "../../styled/styled";
import artistsStore from "../../store/store";
import Item from "../Item/Item";

type ArtistType = {
  id: number;
  name: string;
  genre: string;
  popularity: number;
  date:string;
  photo_url: string;
};

const Artist = observer(() => {
  let navigate = useNavigate();

  const [filter, setFilter] = useState("");

  const { artists, loadArtists } = artistsStore;

  useEffect(() => {
    loadArtists();
  }, []);

  return (
    <ContainerArtist>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Поиск по имени Артистов"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            navigate("/artist/add");
          }}
        >
          Добавить
        </Button>
      </ContainerInput>
      <Title>Артисты</Title>
      <ContainerGrid>
        {artists.length > 0
          ? artists
              .filter((item) => item.name.includes(filter))
              .map((artist: ArtistType, i) => (
                <Item
                  id={artist.id}
                  image={artist.photo_url}
                  name={artist.name}
                  genre={artist.genre}
                  date={artist.date}
                  popular={artist.popularity}
                  key={i}
                />
              ))
          : null}
      </ContainerGrid>
    </ContainerArtist>
  );
});

const ContainerArtist = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 70px;
`;

export default Artist;
