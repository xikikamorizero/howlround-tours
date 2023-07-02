import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerGrid,
  Title,
  Input,
  ContainerInput,
  Button,
} from "../../styled/styled";
import TourItem from "../TourItem/TourItem";
import artistsStore from "../../store/store";

type TourType = {
  id: number;
  artist_id: number;
  title: string;
  location: string;
  date: string;
  photo_url: string;
};

const Tour = observer(() => {
  let navigate = useNavigate();
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);

  const [filter, setFilter] = useState("");

  const { currentArtist, loadArtistsById } = artistsStore;

  useEffect(() => {
    loadArtistsById(id);
  }, []);

  return (
    <ContainerTour>
      <ContainerInput>
        <Input type="text" placeholder="Поиск по названию туров"  onChange={(e) => {
            setFilter(e.target.value);
          }} />
        <Button
          onClick={() => {
            navigate(`/artist/${id}/addtour`);
          }}
        >
          Добавить
        </Button>
      </ContainerInput>
      <Title>Гастроли</Title>
      <ContainerGrid>
        {currentArtist != null && currentArtist.performances.length > 0
          ? currentArtist.performances.filter((item) => item.title.includes(filter))
          .map((tour: TourType, i) => (
              <TourItem
                artistId={tour.artist_id}
                id={tour.id}
                image={tour.photo_url}
                location={tour.location}
                name={tour.title}
                date={tour.date}
                key={i}
              />
            ))
          : null}
      </ContainerGrid>
    </ContainerTour>
  );
});

const ContainerTour = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 70px;
`;

export default Tour;
