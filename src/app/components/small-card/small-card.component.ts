import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = "";
  
  @Input()
  cardTitle:string = "";
  
  @Input()
  id:string = "0";
  constructor() {}
  
  ngOnInit():void {
    
  }
}
