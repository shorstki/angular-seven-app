import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  selectedAssignment: Assignment;
  formVisible = false;

  assignments: Assignment[] = [
    {
      name: 'One',
      dueDate: new Date('2020-02-04'),
      submitted: true
    },
    {
      name: 'Two',
      dueDate: new Date('2019-01-02'),
      submitted: false
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddButtonClick() {
    this.formVisible = true;
    this.selectedAssignment = null;
  }

  onNewAssignment(assignment: Assignment) {
    this.assignments.push(assignment);
    this.formVisible = false;
  }

}
