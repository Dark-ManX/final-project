import { fetchFriends } from './friendsApi';
import { fetchNewsSearch } from './newsApi';
import {
  fetchNotices,
  fetchSearch,
  fetchAddFavorite,
  fetchRemoveFavorite,
} from './noticesApi';
import { fetchPetAdd } from './petApi';
import { fetchUser } from './userApi';

class Fetch {
  constructor() {
    this.BASE_URL = 'https://team-api-server-outlight.onrender.com';
  }

  getFriends = async () => await fetchFriends(this.BASE_URL);

  getNews = async query => await fetchNewsSearch(this.BASE_URL, query);

  getNotices = async (query, token) =>
    await fetchNotices(this.BASE_URL, query, token);

  addToFavorite = async (query, token) =>
    await fetchAddFavorite(this.BASE_URL, query, token);

  removeFromFavorite = async (query, token) =>
    await fetchRemoveFavorite(this.BASE_URL, query, token);

  findNotices = async query => await fetchSearch(this.BASE_URL, query);

  addPet = async (pet, query) => await fetchPetAdd(this.BASE_URL, pet, query);

  getUser = async token => await fetchUser(this.BASE_URL, token);
}

export const response = new Fetch();
