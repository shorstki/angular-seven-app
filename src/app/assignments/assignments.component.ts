import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';
import {AssignmentsService} from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  selectedAssignment: Assignment;
  formVisible = false;
  assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {
    // this.assignments = this.assignmentsService.getAssignments()

    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onAddButtonClick() {
    this.formVisible = true;
    this.selectedAssignment = null;
  }

  onNewAssignment(assignment: Assignment) {
    this.assignmentsService.addAssignment(assignment)
      .subscribe(success => console.log(success));
    this.formVisible = false;
  }



}
