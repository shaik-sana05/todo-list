import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  formOk: boolean=true;
  toDoTitle: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      title:this.toDoTitle,
      desc:this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.toDoTitle="";
    this.desc="";
  }
}