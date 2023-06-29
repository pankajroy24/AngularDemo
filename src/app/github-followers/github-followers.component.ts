import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  
  followers:any[]=[];
  constructor(private service:GithubFollowersService,private router:ActivatedRoute){
    
  }

  ngOnInit():void
  {
     combineLatest([
      this.router.paramMap,
      this.router.queryParamMap
     ]

     ).pipe(
      switchMap(combined=>
      {
        let id=  combined[1].get('page');
        console.log(id);
        return this.service.getAll<any[]>(this.service.URL);

      })
      
     ).subscribe(followers=>
      {
         this.followers=followers;
      });
     

   
  }
}
