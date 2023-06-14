import { Component } from '@angular/core';

interface Assignee {
  name?: string | null;
}

interface Task {
  title: string;
  assignee?: Assignee;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   task: Task = {
    title: 'Review applications',
    
  }

  
  
}


