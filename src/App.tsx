import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import Tour from "./components/Tour/Tour";
import Artist from "./components/Artist/Artist";
import AddArtist from "./components/AddArtist/AddArtist";
import AddTour from "./components/AddTour/AddTour";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import artistsStore from "./store/store";
import { observer } from "mobx-react";

const App = observer(() => {
  const { isLogin } = artistsStore;
  return (
    <AppStyle>
      <Header />
      <Center>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/*" element={<Tour />} />
          <Route
            path="/artist/add"
            element={isLogin ? <AddArtist /> : <Login />}
          />
          <Route
            path="/artist/:id/addtour"
            element={isLogin ? <AddTour /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Center>
      <Footer />
    </AppStyle>
  );
});

const AppStyle = styled.div`
  width: 100%;
  padding-top: 70px;
`;

const Center = styled.div`
  min-height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
