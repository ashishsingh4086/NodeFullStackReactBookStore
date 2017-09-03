import axios from "axios";
export const FETCH_BOOK = "FETCH_BOOK";

export function fetchBook(){
  
        const request = axios.get('/api/book');
       
        return{
            type: FETCH_BOOK,
            payload:request
        }
    }
   
