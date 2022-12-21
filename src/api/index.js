import { fetchFriends } from './friendsApi';
import { fetchNewsSearch } from './newsApi';
import {
  fetchNotices,
  fetchSearch,
  fetchAddFavorite,
  fetchRemoveFavorite,
  fetchRemovePet,
} from './noticesApi';
import { fetchPetAdd } from './petApi';
import { fetchUser, fetchNewAvatar } from './userApi';

class Fetch {
  constructor() {
    this.BASE_URL = 'https://blende2.herokuapp.com';
    this.IMG_URL = 'https://out-light.herokuapp.com';
  }

  getFriends = async () => await fetchFriends(this.BASE_URL);

  getNews = async query => await fetchNewsSearch(this.BASE_URL, query);

  getNotices = async (query, token) =>
    await fetchNotices(this.BASE_URL, query, token);

  addToFavorite = async (query, token) =>
    await fetchAddFavorite(this.BASE_URL, query, token);

  removeFromFavorite = async (query, token) =>
    await fetchRemoveFavorite(this.BASE_URL, query, token);

  removePet = async (query, token) =>
    await fetchRemovePet(this.BASE_URL, query, token);

  findNotices = async query => await fetchSearch(this.BASE_URL, query);

  addPet = async (pet, query) => await fetchPetAdd(this.BASE_URL, pet, query);

  getUser = async token => await fetchUser(this.BASE_URL, token);

  updateAvatar = async (img, token) =>
    await fetchNewAvatar(this.BASE_URL, img, token);
}

export const response = new Fetch();
