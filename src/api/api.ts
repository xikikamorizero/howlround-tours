import axios from 'axios';

const API_URL = 'http://localhost:4000'; // URL бекенда

type ArtistType = {
    name:string;
    genre:string;
    popularity:number;
    date:string;
    photo_url:string;
}

type TourType = {
    title:string;
    location:string;
    date:string;
    photo_url:string;
}

type User = {
  username:string;
  password:string;
}

export const artistsAPI = {
  getArtists() {
    return axios.get(`${API_URL}/artists`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  getArtistById(id:number) {
    return axios.get(`${API_URL}/artists/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  getArtistByName(name:string) {
    return axios.get(`${API_URL}/artists/name/${name}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  addArtist(artistData:ArtistType) {
    return axios.post(`${API_URL}/artists`, artistData)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  addPerformance(artistId:number, performanceData:TourType) {
    return axios.post(`${API_URL}/artists/${artistId}/performances`, performanceData)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  deleteArtist(id:number) {
    return axios.delete(`${API_URL}/artists/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  deletePerformance(artistId:number, performanceId:number) {
    return axios.delete(`${API_URL}/artists/${artistId}/performances/${performanceId}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
};

export const loginApi = {
  registration(user:User){
    return axios.post(`${API_URL}/users`, user)
    .then(response => response.data)
    .catch(error => console.log(error));
  },
  login(user:User){
    return axios.post(`${API_URL}/users/login`, user)
    .then(response => response.data)
    .catch(error => console.log(error));
  }
}