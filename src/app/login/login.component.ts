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

  languages: Language[] = [
    {value: 'polski', viewValue: 'polski'},
    {value: 'english', viewValue: 'english'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
