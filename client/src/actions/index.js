import axios from "axios";
export const FETCH_BOOK = "FETCH_BOOK";
export const FETCH_BOOK_ID = "FETCH_BOOK_ID";
export const CREATE_POST= "CREATE_POST";

export function createBook(values, callback){
  const request= axios.post("/api/book",values)
  .then(()=>callback());
  return{
    type: CREATE_POST,
    payload:request
  }
}
export function fetchBook() {
  const request = axios.get("/api/book");

  return {
    type: FETCH_BOOK,
    payload: request
  };
}
export function fetchBookById(id) {
  const request = axios.get(`/api/book/${id}`);
  return {
    type: FETCH_BOOK_ID,
    payload: request
  };
}
