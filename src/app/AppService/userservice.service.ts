import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }
userDetail:OwnerDetails;
baseUrl="http://localhost:5001/api/exam";

public OwnerInformation(loginDetails:any):Observable<any>
{

  return this.http.post(`${this.baseUrl}/users`,loginDetails);
}




}

