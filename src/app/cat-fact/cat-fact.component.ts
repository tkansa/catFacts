import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service'

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css'],
  providers: [CatService]
})
export class CatFactComponent implements OnInit {

  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCatFact();
  }

}
