import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UpdateNoteComponent} from "./update-note/update-note.component";
import {HomeComponent} from "./home/home.component";
import {ManageNotesComponent} from "./manage-notes/manage-notes.component";

const routes: Routes = [{path: '', component:HomeComponent},
  {path:'note/:id', component:UpdateNoteComponent},
  {path:'manage-note', component:ManageNotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
