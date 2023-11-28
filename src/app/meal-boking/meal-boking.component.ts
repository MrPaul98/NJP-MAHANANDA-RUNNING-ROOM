import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-boking',
  templateUrl: './meal-boking.component.html',
  styleUrls: ['./meal-boking.component.css']
})
export class MealBokingComponent implements OnInit {

  constructor() { }
  name: string | undefined;
  cd: string | undefined;
  id: string | undefined;
  ud = [{
    id: 123456,
    name: 'Sandip Paul',
    ckdt: '11/28/2023 12:19'
  },
  {
    id: 123457,
    name: 'Subham Paul',
    ckdt: '11/28/2023 10:19'
  },
];
  ngOnInit(): void {
  }
  fun(){
    // this.name = this.ud.filter(e => if(e.id === id){
    //   return e.name;
    // });
  }

}
