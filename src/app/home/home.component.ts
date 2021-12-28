import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddNote} from "../addNote";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noteData=new FormGroup({});

  constructor( private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.noteData= new FormGroup(
      {
        id: new FormControl(null, Validators.required),
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),

      }
    );
  }
  onSubmit(noteData:AddNote)
  {
    console.log(this.noteData)
    this.noteService.createNote(noteData).subscribe(res =>
    {
      console.log(res);
      this.router.navigate(['/manage-note']);
    })

  }
  clear()
  {
    this.noteData.reset();
  }


}
