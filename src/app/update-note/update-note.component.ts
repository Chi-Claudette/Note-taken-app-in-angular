import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AddNote} from "../addNote";
import {HttpClient} from "@angular/common/http";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  noteData=new FormGroup({});
  date= new Date();
  note:any;
  noteid:number= this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private router:Router, private noteService: NoteService ) { }

  ngOnInit(): void {
    this.noteData= new FormGroup(
      {
        id: new FormControl(null, Validators.required),
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
      }
    );
    this.getNote();
  }
  update(data: AddNote)
  {
    return this.noteService.updateNote(data, this.noteid).subscribe(res=>
    {
      console.log(res);
     this.router.navigate(['/manage-note']);
    });
  }

  cancel()
  {
    this.router.navigate(['/manage-note']);
  }

  getNote()
  {
    return this.noteService.getNote(this.noteid).subscribe(res=>
    {
      this.note= res;
      console.log(res);
      console.log(this.noteid);
    });

  }


}
