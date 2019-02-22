import {Component, Input, OnInit} from '@angular/core';
import {Assignment} from '../assignments.model';
import {AssignmentsService} from '../../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {
  }

  onAssignmentSubmitted() {
    this.passedAssignment.submitted = !this.passedAssignment.submitted;
    this.assignmentsService.updateAssignment(this.passedAssignment)
      .subscribe(success => console.log(success));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.passedAssignment)
      .subscribe(res => {
        console.log(res);
      });
    this.passedAssignment = null;
  }

}
