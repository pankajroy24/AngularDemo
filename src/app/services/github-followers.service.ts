import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubFollowersService extends DataService {
  
  private url='https://api.github.com/users/mosh-hamedani/followers';
  constructor(http: HttpClient) {
    super(http);
  }

  get URL()
  {
    return this.url;
  }
}
