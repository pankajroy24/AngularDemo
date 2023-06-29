import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:Router) { }

  ngOnInit() {
    
    this.router.paramMap.subscribe(paramMap=>
      {
         let id=paramMap.get('id');
         let username=paramMap.get('username');
         console.log(username);

      });
  }

  onSubmit()
  {
      this.service.navigate(['/followers'],{
        queryParams:{page:1,order:'newest'}
      });
  }

}
