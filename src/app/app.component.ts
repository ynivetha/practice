import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string;
  age=27;
  showMyComp=true;
constructor(){
console.log("constructor loaded")
}

ngOnInit(){
	this.title='Hello world';
console.log("ngoninit loaded")
}

onChange(){
	this.title='Hello World !!!';
}

toggle() {
  this.showMyComp = !this.showMyComp;
}

}
