import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

  url = 'https://jsonplaceholder.typicode.com/todos/2';

  constructor( private http: HttpClient) { }


   getData(){
     /// call to api
     return this.http.get(this.url, { headers: { 'accept': 'application/json'}})
   }


     
   getQuotes(){

    let token = localStorage.getItem('token');
    debugger
    return  this.http.get('https://localhost:44397/api/quotes', {headers:{'Authorization':'bearer ' + token}})

  }

  PostQuotes(){
    debugger
    let body = {
      "Description": "This a  New house insurance",
      "DueDate": "2022-09-12T10:06:02.7564528-04:00",
      "Premium": 500,
      "QuoteType": "House",
      "Sales": "Paul"
    }
    let token = localStorage.getItem('token')
    return  this.http.post('https://localhost:44397/api/quotes',body, {headers:{'Authorization':'bearer ' + token}})

  }
}
