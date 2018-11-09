import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(homeContent){
      var that = document.getElementById('form-content')
      that.classList.add('opacity-1');
    },500) 
  }

}
