import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent implements OnInit, OnDestroy {
  @Input() age;
  names = [ 'Nivetha', "sahan", "braveen", "Isuru"];
  names1 = [{name:"nivetha", job:"SE"},{name:"nivetha", job:"SE"}];
  constructor() { }

  ngOnInit(): void {
    console.log(this.age);
  }
  ngOnDestroy() {
    console.log('ondestroy');
  }
}
