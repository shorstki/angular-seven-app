import { Injectable } from '@angular/core';
import {Assignment} from '../assignments/assignments.model';
import { Observable, of} from 'rxjs';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

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

  constructor(private logingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);

    this.logingService.log(assignment.name, 'added');
    return of('assignment added');
  }

  updateAssignment(updatedAssignment: Assignment): Observable<string> {
    this.assignments.forEach((assignment, i) => {
      if (assignment === updatedAssignment) {
        this.assignments[i] = updatedAssignment;
        this.logingService.log(updatedAssignment.name, 'updated');
      }

    });
    return of('assignment updated');
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    const assignmentIndex = this.assignments.indexOf(assignment);
    this.assignments.splice(assignmentIndex, 1);
    this.logingService.log(assignment.name, 'deleted');
    return of('Assignment deleted');
  }
}
