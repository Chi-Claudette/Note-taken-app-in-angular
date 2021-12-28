import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-manage-notes',
  templateUrl: './manage-notes.component.html',
  styleUrls: ['./manage-notes.component.css']
})
export class ManageNotesComponent implements OnInit {
  notes:any;
  date= new Date();

  constructor( private router: Router, private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes();

  }

  delete(id: number)
  {
     this.noteService.deleteNote(id).subscribe((response) => {
       console.log(response)
       this.getNotes();
     })

  }
  edit(noteid:number)
  {
    this.router.navigate(['/note', noteid]);
  }

  getNotes()
  {
    return this.noteService.getNotes().subscribe(res =>
    {
      this.notes= res;
    })
  }


}
