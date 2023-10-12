import { Component , OnInit} from '@angular/core';
import {Todo} from "../../app/Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  localItem : string; 

  todos : Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos"); //localItem gets the todos list from the local storage
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);//we have to parse a string
    }
  }

  ngOnInit() : void {

  }

  deleteTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));//saves the todos list in local storage
  }
  addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));//saves the todos list in local storage
  }

  toggleTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));//saves the todos list in local storage
  }
}
