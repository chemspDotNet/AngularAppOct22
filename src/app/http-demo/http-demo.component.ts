import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  constructor(private dataservice: DataService, private account: AccountService) { 

  }

  quotes:any
  ngOnInit(): void {
  }


  logOut(){
    localStorage.removeItem('token');
  }

  login() {
    debugger
    this.account.Login().subscribe({
      next: (data) => {
        debugger;
        localStorage.setItem('token', data['access_token'])

      }
    });
  }

  register() {
    debugger
    this.account.register().subscribe({
      next: (data) => {
        debugger;
        console.log("Registration Successful !")
      }
    });
  }

  getquotes(){
    debugger
   this.dataservice.getQuotes().subscribe({
    next:(quotes)=>{
   debugger
     console.log(quotes)
     this.quotes= quotes
    }
   })

//this.quotes = this.dataservice.getQuotes();
  }
  addquotes(){
    this.dataservice.PostQuotes().subscribe({
      next:(newquote)=>{
     debugger
       console.log(newquote)
      }
     })
  }
}
