import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../dao/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/195px-No-Image-Placeholder.svg.png';
  @Input()
  contentTitle: string = 'Insira o título aqui.';
  @Input()
  contentDescription: string = 'Insira a descrição aqui.';

  private id: string | null = null

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.id = value.get('id')
        this.setValuesToComponent(this.id)
      }
    )
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter(article => article.id === id)[0]

    console.log(result.title);

    this.photoCover = result.proto
    this.contentTitle = result.title
    this.contentDescription = result.description

  }

}
