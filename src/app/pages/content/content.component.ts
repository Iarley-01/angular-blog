import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStask_JRDW5BDfjJt8Xvc1n32XQ3WK7e66bA&usqp=CAU";
  contentTitle:string = "MINHA NOTICIA";
  contentDescription:string = "Descrição da Notícia";
  private id:string | null = "0";
  
  constructor(private route:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id= value.get("id"))
    
    this.setValuesToComponent(this.id);
  }
  
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
  
  
}
