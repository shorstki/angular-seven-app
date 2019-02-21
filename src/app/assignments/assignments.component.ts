import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments = [
    {
      name: 'One',
      subDate: '2018-02-04',
      submitted: true
    },
    {
      name: 'Two',
      subDate: '2019-01-92',
      submitted: false
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
