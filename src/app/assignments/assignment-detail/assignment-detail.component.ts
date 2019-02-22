import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../assignments.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;

  constructor() { }

  ngOnInit() {
  }

  onAssignmentSubmitted() {
    this.passedAssignment.submitted = !this.passedAssignment.submitted;
  }

}
