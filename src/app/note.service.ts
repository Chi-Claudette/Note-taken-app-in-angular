import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl:string = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  createNote(note:any)
  {
    return this.http.post<any>(this.baseUrl+'note', note);
  }

  getNotes()
  {
    return this.http.get<any>(this.baseUrl+'getNotes');
  }

  getNote(noteid:number)
  {
    return this.http.get(this.baseUrl+'getNote/'+noteid);
  }

  deleteNote(noteid:number):Observable<Object>
  {
      return this.http.delete(this.baseUrl +'deleteNote/'+noteid);
  }

  updateNote(note:any, noteid:number)
  {
    return this.http.put(this.baseUrl+'updateNote/'+noteid, note);
  }

}
