import { fetchFriends } from './friendsApi';
import { fetchNewsSearch } from './newsApi';
import { fetchNotices } from './noticesApi';
import { fetchPetAdd } from './petApi';

class Fetch {
  constructor() {
    this.BASE_URL = 'https://team-api-blended2.herokuapp.com';
  }

  getFriends = async () => await fetchFriends(this.BASE_URL);

  getNews = async query => await fetchNewsSearch(this.BASE_URL, query);

  getNotices = async query => await fetchNotices(this.BASE_URL, query);

  getAddsPet = async (pet, query) => await fetchPetAdd(this.BASE_URL, pet, query);
}

export const response = new Fetch();
