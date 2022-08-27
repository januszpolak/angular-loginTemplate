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
  password: string = "";
  f:any = '';

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

  //onChange method to toggle class by slider (only JS)) 
  onChange() {
    console.log("ok");
    const div = document.getElementById("div")?.classList.toggle("dark");
  }

  constructor() { }

  ngOnInit(): void {

  }

}
