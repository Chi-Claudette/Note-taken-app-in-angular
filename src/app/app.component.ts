import {Component, OnInit} from '@angular/core';
import {AddNote} from "./addNote";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{

  constructor() {
  }
  ngOnInit(): void {

  }



}
