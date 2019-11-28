import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }





Allpermissions:Allpermission[]=[];
userDetail:OwnerDetails;
baseUrl="http://localhost:5001/api";

public OwnerInformation(loginDetails:any):Observable<any>
{

  return this.http.post(`${this.baseUrl}/users`,loginDetails);
}

public Globalpermission():Observable<any>
{

  return this.http.get(`${this.baseUrl}/permissons`);
}

public createUser(userDetails:OwnerDetails):Observable<any>
{

  return this.http.post(`${this.baseUrl}/new-users`,userDetails);
}


}

