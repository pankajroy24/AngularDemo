import { Injectable } from '@angular/core';
import { BadInput } from './../common/bad-input';
import { NotFoundException } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { throwError ,lastValueFrom} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getAll<T>(url:string) {
    return this.http.get<T>(url)
    .pipe(catchError(this.handleError));    
  }

  get<T>(url:string,id:any) { 
    return this.http.get<T>(url + '/' + id)
    .pipe(catchError(this.handleError));    
  }

  create<T>(url:string,resource:any) {
    return this.http.post<T>(url, JSON.stringify(resource))
    .pipe(catchError(this.handleError));     
      
  }

  update<T>(url:string,resource:any) {
    return this.http.put<T>(url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(catchError(this.handleError));        
  }

  delete<T>(url:string,id:any) {
    return this.http.delete<T>(url + '/' + id)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(()=>new BadInput(error.json()));
   
  
    if (error.status === 404)
    return throwError(()=>new NotFoundException());
    
    return throwError(()=>new AppError(error));
  }
}
