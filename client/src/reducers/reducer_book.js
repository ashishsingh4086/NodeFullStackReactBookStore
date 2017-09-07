import { FETCH_BOOK, FETCH_BOOK_ID } from "../actions";
export default function BookReducer(state = [], action) {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload.data;

    case FETCH_BOOK_ID:
      const book = action.payload.data;
      return { ...state, [book._id]: book };

    default:
      return state;
  }
}
