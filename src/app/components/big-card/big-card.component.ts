import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent {
  photoCover:string = "";
  cardTitle:string = "";
  cardDescription:string = "";
  
  constructor() {}
  
  ngOnInit(): void {
    
  }
}
