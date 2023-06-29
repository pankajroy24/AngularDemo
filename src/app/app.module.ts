
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { InputFormatDirective } from './Directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './Forms/TemplateForms/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './Forms/TemplateForms/course-form/course-form.component';
import { SignupFormComponent } from './Forms/ReactiveForms/signup-form/signup-form.component';
import { NewCourseFormComponent } from './Forms/ReactiveForms/new-course-form/new-course-form.component';
import { GithubFollowersService } from './services/github-followers.service';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'followers/:id/:username',component:GithubProfileComponent},
      {path:'followers',component:GithubFollowersComponent},
      {path:'posts',component:PostComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [
    GithubFollowersService,
    
    {provide:ErrorHandler,useClass:AppErrorHandler}
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
