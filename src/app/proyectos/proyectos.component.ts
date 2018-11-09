import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    setTimeout(function(homeContent){
      var that = document.getElementById('proyectos-content')
      that.classList.add('opacity-1');
    },500) 
  };

}
