import { Component,OnInit, Output,EventEmitter} from '@angular/core';
import {Todo} from "../../app/Todo";



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter(); 
  
  title :string;
  desc : string;

  constructor(){

  }

  ngOnInit():void{
  }

  onSubmit(){
    const todo={
      sno : 8,
      title : this.title,
      desc : this.desc,
      active : true
    }

    this.todoAdd.emit(todo);
  }



  
}
