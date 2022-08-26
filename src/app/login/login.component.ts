import { Component, OnInit } from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = "";

  languages: Language[] = [
    {value: 'polski', viewValue: 'polski'},
    {value: 'english', viewValue: 'english'},
  ];
  submit(username: string) {
    console.log(username);

    if (username === "janusz.polak") {
      console.log("ok");
      alert("ok")
      
    }
    
  }

  constructor() { }

  ngOnInit(): void {

  }

}
