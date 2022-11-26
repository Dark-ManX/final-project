import { fetchFriends } from './friendsApi';
import { fetchNewsSearch } from './newsApi';
import { fetchNotices, fetchOwnNotices } from './noticesApi';
import { fetchPetAdd } from './petApi';

class Fetch {
  constructor() {
    this.BASE_URL = 'https://team-api-blended2.herokuapp.com';
  }

  getFriends = async () => await fetchFriends(this.BASE_URL);

  getNews = async query => await fetchNewsSearch(this.BASE_URL, query);

  getNotices = async query => await fetchNotices(this.BASE_URL, query);

  // findNotices = async query => await fetchSearch(this.BASE_URL, query);

  getOwn = async (query, token) =>
    await fetchOwnNotices(this.BASE_URL, query, token);

  addPet = async (pet, query) => await fetchPetAdd(this.BASE_URL, pet, query);
}

export const response = new Fetch();
