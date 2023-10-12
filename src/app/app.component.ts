import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoAp';

  constructor(){
    setTimeout(()=>{
      this.title= "ToDoApp";
    },2000)
  }
}
