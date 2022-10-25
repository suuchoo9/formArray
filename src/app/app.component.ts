import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  studentFromGroup: FormGroup;
  studentFormArray: FormArray;

  constructor() {}
  ngOnInit(): void {
    this.studentFromGroup = new FormGroup({ 
      studentFormArray: new FormArray([]),
    });
    this.AddMore();
  }

  CreateMakrsItem() {
    let newGroup = new FormGroup({
      subject: new FormControl(''),
      marks: new FormControl(''),
    });
    return newGroup;
  }

  getFormArrayDetails() {
    // console.log((<FormArray>this.studentFromGroup.get('studentFormArray')).controls,"sample count")
    return (<FormArray>this.studentFromGroup.get('studentFormArray')).controls;
  }

  // [].pudh
  AddMore() {
    this.studentFormArray = this.studentFromGroup.get(
      'studentFormArray'
    ) as FormArray;
    this.studentFormArray.push(this.CreateMakrsItem());
  }

  removeIems(i: number) {
    console.log(i);
    (<FormArray>this.studentFromGroup.get('studentFormArray')).removeAt(i);
  }

  savestu() {
    console.log(this.studentFromGroup.value);
  }
}
