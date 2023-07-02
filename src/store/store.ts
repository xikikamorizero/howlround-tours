import { action, makeAutoObservable } from "mobx";
import { artistsAPI, loginApi } from "../api/api";

type ArtistType = {
  id: number;
  name: string;
  genre: string;
  popularity: number;
  date:string;
  photo_url: string;
};

type AddArtistType = {
  name: string;
  genre: string;
  popularity: number;
  date:string;
  photo_url: string;
};

type CurrentArtistType = {
  id: number;
  name: string;
  genre: string;
  popularity: number;
  photo_url: string;
  performances: TourType[];
};

type TourType = {
  id: number;
  artist_id: number;
  title: string;
  location: string;
  date: string;
  photo_url: string;
};

type AddTourType = {
  title: string;
  location: string;
  date: string;
  photo_url: string;
};

type User = {
  username: string;
  password: string;
};

type getUsersType = {
  id: number;
  username: string;
  password: string;
  key: string;
};

const key = "01d21k32j13j12k231l31";

class ArtistsStore {
  artists: ArtistType[] = []; // список артистов
  currentArtist: CurrentArtistType | null = null; // текущий выбранный артист
  isLoading: boolean = false; // флаг загрузки
  isProcess: number = 0;
  userName: string | null = null;
  isLogin: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.loadArtists = this.loadArtists.bind(this);
    this.loadArtistsById = this.loadArtistsById.bind(this);
    this.addArtist = this.addArtist.bind(this);
    this.Process = this.Process.bind(this);
    this.deleteArtist = this.deleteArtist.bind(this);
    this.deleteTour = this.deleteTour.bind(this);
    this.registration = this.registration.bind(this);
    this.login = this.login.bind(this);
    this.exitAccount = this.exitAccount.bind(this);
  }

  Process() {
    this.isProcess = 0;
  }
  // Action для загрузки списка артистов
  async loadArtists() {
    try {
      this.isLoading = true;
      const data = await artistsAPI.getArtists();
      this.artists = data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  }
  //для получения Артиста по id
  async loadArtistsById(id: number) {
    try {
      this.isLoading = true;
      const data = await artistsAPI.getArtistById(id);
      this.currentArtist = data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  }

  // Action для добавления нового артиста
  async addArtist(artistData: AddArtistType) {
    try {
      const newArtist = await artistsAPI.addArtist(artistData);
      this.artists.push(newArtist);
      this.isProcess = 1;
    } catch (error) {
      console.log(error);
      this.isProcess = 2;
    }
  }

  // Action для добавления нового артиста
  async addTour(artistId: number, performanceData: AddTourType) {
    try {
      const newArtist = await artistsAPI.addPerformance(
        artistId,
        performanceData
      );
      if (this.currentArtist != null) {
        this.currentArtist.performances.push(newArtist);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Action для удаления артиста
  async deleteArtist(id: number) {
    try {
      await artistsAPI.deleteArtist(id);
      const index = this.artists.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.artists.splice(index, 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Action для удаления артиста
  async deleteTour(idArtist: number, id: number) {
    try {
      await artistsAPI.deletePerformance(idArtist, id);
      if (this.currentArtist != null) {
        const index = this.currentArtist.performances.findIndex(
          (item) => item.id === id
        );
        if (index !== -1) {
          this.currentArtist.performances.splice(index, 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // регистрация
  async registration(user: User) {
    try {
      const users: getUsersType = await loginApi.registration(user);
      this.userName = user.username;
      if (users.key == key) {
        this.isLogin = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // авторизация
  async login(user: User) {
    try {
      const users: getUsersType = await loginApi.login(user);
      this.userName = user.username;
      if (users.key == key) {
        this.isLogin = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  //выход из аккаунта
  exitAccount() {
    this.isLogin = false;
    this.userName = null;
  }

  // Computed value для получения количества артистов
  get artistsCount() {
    return this.artists.length;
  }
}

const artistsStore = new ArtistsStore();
export default artistsStore;
