const defaultStore = {
  books: [],
  likes: [],
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case 'getBooks': {
      return {
        ...state,
        books: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

