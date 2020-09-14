import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {Users} from './users';
import { map, catchError } from 'rxjs/operators';
import { Person } from './model-class/person';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  setLoginDtls(data:any):Observable<any[]>{
    console.log("entered in service method");
    
    return ;

  }

  getUsers():Observable<Person[]> {
    return this.http.get(`http://localhost:9010/maa-oori-rice-server/home`).
        pipe(
           map((data: Person[]) => {
             console.log("data---",data);
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }


    saveUserDtl(saveData:Users[]):Observable<any>{
      console.log("user data in service---",saveData);
      return this.http.post(`https://reqres.in/api/users`,saveData).
      pipe(map((data:Users[]) =>{
        console.log("response Data===",data)
         return data;
      }),catchError(error =>{
        return throwError(" data not saved !");
      })
    )
    }

}
