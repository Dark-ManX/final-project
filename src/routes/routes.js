export const ROUTES = {
  AUTH: {
    // POST
    create: '/register',
    // PATCH
    register: '/register/:id',
    // POST
    login: '/login',
    // GET
    logout: '/logout',
    // GET
    current: '/current',
    // PATCH
    updateInfoUser: '/user',
  },
  FRIENDS: {
    // GET
    getAllFriends: '/friends',
    //   GET
    getFriendById: '/friends/:id',
  },
  NEWS: {
    //   GET
    getAllNews: '/news',
    //   GET
    getNewsById: '/news/:id',
    // GET
    getSearchNews: '/news/search/:value',
  },
  USER: {
    //   GET
    getUserInfo: '/user',
    // PATCH
    updateInfoUser: '/user',
    //   GET
    getUserPets: '/pets',
    // POST
    createUserPet: '/pets',
    // PATCH
    addUserPet: '/pets/:id',
    // DELETE
    deleteUserPet: '/pets/:id',
  },
  NOTICES: {
    //   GET
    //   value one of (sell,for-free,lost-found)
    getNoticesByCategory: '/notices/:value',
    //   GET
    getNoticeById: '/notices/one/:id',
    //   POST
    createNotice: '/notices',
    //   PATCH
    addNotice: '/notices/:id',
    // GET
    getNoticesOwn: '/owner/own',
  },
};
