import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todosArr!:ITodo[]
  @Output() editTodo:EventEmitter<ITodo>=new EventEmitter<ITodo>()
  @Output() removeTodo:EventEmitter<string>=new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  trackById(index:number,todo:ITodo){
    return todo.id
  }

  onEdit(todo:ITodo){
    this.editTodo.emit(todo)
  }
  onRemove(id:string){
    this.removeTodo.emit(id)
  }

}
