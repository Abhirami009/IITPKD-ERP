import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Project, Status } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = "assets/data.json";
  constructor(private http : HttpClient) { }

  getprojects() : Observable<Project[]> {
    return this.http.get<{projects: Project[]}>(this.url).pipe(map(data => data.projects));
  }

  // statupdate(projectname : string, status : Status){
  //   return this.http.put<Project>(`${this.url}/projects/${projectname}/status`, { status });
  // } 
  // on using a json server we can use this
}
