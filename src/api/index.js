import { fetchFriends } from './friendsApi';
import { fetchNewsSearch } from './newsApi';

class Fetch {
  constructor() {
    this.BASE_URL = 'https://team-api-blended2.herokuapp.com';
  }

  getFriends = async () => await fetchFriends(this.BASE_URL);

  getNews = async query => await fetchNewsSearch(this.BASE_URL, query);
}

export const response = new Fetch();
