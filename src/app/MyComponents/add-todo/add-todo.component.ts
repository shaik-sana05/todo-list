import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  private formOk: boolean=true;
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
  
    if(this.title !="" && this.desc!=""){
      
      const todo = {
        title:this.title,
        desc:this.desc,
        active: true
      }
      this.todoAdd.emit(todo);
      this.title="";
      this.desc=""
    }
    else {
      this.formOk=false
    }
  }

}