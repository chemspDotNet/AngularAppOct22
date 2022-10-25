import { Component, OnInit, ViewEncapsulation } from "@angular/core";    
import { TestService } from "../services/test.service";


@Component({
    selector:'app-home',
    templateUrl :'./home.component.html',
   styleUrls:['./home2.component.css', './home.component.css'],
   providers:[TestService]   ///
    
})
 export class HomeComponent implements OnInit  {

    myVal = 'Hello Class !!!'

    mystyles= {color:'red', border:'5px solid black'};

    i = 2;
    name :any;
    unkwn:any;
    flag = false;
    customers = [
      {'name':'Customer1', 'city': 'City1'},
      {'name':'Customer2', 'city': 'City2'},
      {'name':'Customer3', 'city': 'City3'},
      {'name':'Customer4', 'city': 'City4'},
      {'name':'Customer5', 'city': 'City5'}
  ]

      cities=['NYC', 'Boston', 'Tampa', 'Atlanta']  // DB
   
      constructor( private testsvc: TestService){

      //let test = new Test(30, 'NYC');
    }

    ngOnInit(): void {
      let y= this.testsvc.getMessage();
      debugger
    }

     greet(val:any){
      debugger;
       return this.name
    }


    handleEvent(inp:any){
      debugger
      this.name = inp.value
    }

    toggleButton(){
      this.flag = !this.flag
    }
} 