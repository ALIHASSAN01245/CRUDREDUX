const initialState = [
  {
    id: 0,
    name: "Be World",
    author: "Nora Roberts",
    startDate: "2019-09-01",
    desc: "The World Book Encyclopedia is an American encyclopedia. The encyclopedia is designed to cover major areas of knowledge uniformly, but it shows particular strength in scientific, technical, and medical subjects. World Book was first published in 1917",
  },
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K Rowling",
    startDate: "2000-10-06",
    desc: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
  },
];
export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      state = [...state, action.payload];
      return state;
    case "DELETE_BOOK":
      const contactFilter = state.filter((book) =>
        book.id === action.payload ? null : book
      );
      state = contactFilter;
      return state;
    case "UPDATE_BOOK":
      const contactUpdate = state.filter((book) =>
        book.id === action.payload.id
          ? Object.assign(book, action.payload) //It returns the modified target object.
          : book
      );
      state = contactUpdate;
      return state;
    case "RESET_BOOK":
      state = [
        {
          name: null,
          author: null,
          phone: null,
          startDate: null,
          desc: null,
        },
      ];
      return state;
    default:
      return state;
  }
};
