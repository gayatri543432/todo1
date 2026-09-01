import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { ITodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArr:ITodo[]=todoArr
  editTodo!:ITodo
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitTodo(todo:ITodo){
    this.todoArr.unshift(todo)
  }
  onEditTodo(todo:ITodo){
    this.editTodo=todo
  }

  onUpdateTodo(todo:ITodo){
    let getIndex=this.todoArr.findIndex(t=>t.id === todo.id)
    this.todoArr[getIndex]=todo
  }

  onRemoveTodo(id:string){
    let getConfirm=confirm(`Are you Sure you want to remove todo with ${id}?`)
    if(getConfirm){
      let getIndex=this.todoArr.findIndex(t=>t.id === id)
       this.todoArr.splice(getIndex,1)
    }
  }
}
