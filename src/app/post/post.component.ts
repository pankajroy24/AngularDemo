import { Post } from './../services/entities/post.entity';
import { NotFoundException } from './../common/not-found-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[]=[];
  
  constructor(private service:PostService){
     
  }

  ngOnInit(): void {
    this.service.getAll<Post[]>(this.service.URL)
     .subscribe({next:(posts)=> this.posts=posts});
  }
  

  createPost(input:HTMLInputElement)
  {
    let post:Post={title:input.value};
    this.posts.splice(0,0,post);

    input.value='';
    
    this.service.create<Post>(this.service.URL,post)
    .subscribe({
      next:(newPost)=>
      {
        post.id=newPost?.id;
        
      },
      error:(error:AppError)=>
      {
        this.posts.splice(0,1);

        if(error instanceof BadInput)
          alert('The post is not there.')
        else throw error;
      }
    });
  }

  updatePost(post:Post){
    
    post.isRead=true;
    this.service.update<Post>(this.service.URL,post)
    .subscribe({
      next:(updatedPost)=>
      {
          console.log(updatedPost);
      },
      error:(error:AppError)=>
      {
        if(error instanceof NotFoundException){
           alert('The post is not there.')
        }
        else throw error;
      }
   });
  }

  deletePost(post:Post)
  {
    const index=  this.posts.indexOf(post);
    this.posts.splice(index,1);
     
    this.service.delete<Post>(this.service.URL,post.id as number)
    .subscribe({
      error:(error:AppError)=>
      {
        this.posts.splice(index,0,post);

        if(error instanceof NotFoundException)
         alert('This post has already been deleted.')
        else throw error;
      }
    });
    
  }
}
