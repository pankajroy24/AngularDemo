
import { Post } from './entities/post.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, catchError, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundException } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  
  private url:string='http://jsonplaceholder.typicode.com/posts';
  constructor(http:HttpClient) {
    super(http);
   }

   get URL()
   {
     return this.url;
   }
}
