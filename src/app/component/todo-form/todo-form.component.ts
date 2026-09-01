import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{
  isInEditMode:boolean=false
  @Input() edittodo!:ITodo
  @ViewChild('todoForm') todoForm!:NgForm
  @Output() newTodo:EventEmitter<ITodo>=new EventEmitter<ITodo>()
  @Output() updateTodo:EventEmitter<ITodo>=new EventEmitter<ITodo>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  const editObj = changes['edittodo']?.currentValue as ITodo;

  this.isInEditMode = !!editObj;

  if (editObj) {
    this.todoForm.form.patchValue(editObj);
  }
}
  onSubmit(){
    if(this.todoForm.valid){
      let newObj={
        ...this.todoForm.value,id:Date.now().toString()
      }
      this.newTodo.emit(newObj)
      this.todoForm.reset()
    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let updateObj={
        ...this.todoForm.value,id:this.edittodo.id
      }
      this.updateTodo.emit(updateObj)
      this.todoForm.reset()
      this.isInEditMode=false
    }
  }


}
