import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  list: string[] = [];
  todo: any;
  // inputValue: string = '';
  button: any;
  editMode: boolean = false;
  deleteMode: boolean = false;
  editIndex: null | number = null;

  onSubmit(): void {
   if (this.editMode && this.editIndex !== null) {

    console.log(this.list[this.editIndex]);

    this.list[this.editIndex] = this.todo;
    console.log(this.todo);
    

    this.editMode = false;
    

    this.editIndex = null;
    // this.editMode = false;

  }
    // if (!this.todo) return;
     else if (this.todo) {
      this.list.push(this.todo);
      
      // else {
        //   this.list.push(this.todo);
        // }
      }
      this.todo = '';
  }
  onEdit(index: number): void {
    console.log(`Edit Button ${index} clicked`);
    this.editMode = true;
    this.editIndex = index;
    this.todo = this.list[index];
    console.log(this.todo);
  }

  onDelete(index: number): void {
    console.log(`Delete Button ${index} clicked`);
    this.list.splice(index, 1);
  }
}
