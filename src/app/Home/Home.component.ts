import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],

})
export class Home implements OnInit {
  title="HOME"
  constructor() { }
  ngOnInit() {
    setTimeout(function(homeContent){
      var that = document.getElementById('home-content')
      that.classList.add('opacity-1');
    },500) 
  }
  onVoted() {
    console.log('hola home')
    // agreed ? this.agreed++ : this.disagreed++;
  }

}
