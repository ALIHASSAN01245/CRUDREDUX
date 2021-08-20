const initialState = [
  {
    id: 0,
    authname: "Nora Roberts",
    noofbooks: "more than 200",
    DOB: "1950-09-01",
    Achievements:
      "Audie Award for Excellence in Design at (2018) ,RITA Award for best Novel(2009-1996),Quill Award for Book of the year (2007)",
  },
  {
    id: 1,
    authname: "J.K ttrolling",
    noofbooks: "more than 600",
    DOB: "1850-10-06",
    Achievements:
      "Legion of the Honour (2009),Andre Notran Award(2007),Hugo Award for Best Novel(2001)",
  },
];
export const AuthorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      state = [...state, action.payload];
      return state;
    case "DELETE_AUTHOR":
      const authorfilter = state.filter((author) =>
        author.id === action.payload ? null : author
      );
      state = authorfilter;
      return state;
    case "UPDATE_AUTHOR":
      const authorUpdate = state.filter((author) =>
        author.id === action.payload.id
          ? Object.assign(author, action.payload) //It returns the modified target object.
          : author
      );
      state = authorUpdate;
      return state;
    case "RESET_AUTHOR":
      state = [
        {
          authname: null,
          noofbooks: null,
          DOB: null,
          Achievements: null,
        },
      ];
      return state;
    default:
      return state;
  }
};
