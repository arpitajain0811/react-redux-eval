const defaultStore = {
  books: [],
  likes: [],
};

export default (prevState = defaultStore, action) => {
  switch (action.type) {
    default: {
      return prevState;
    }
  }
};

