import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cat {
  type: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  public catFacts: Cat[] = [];

  constructor(private http: HttpClient) {}

  urlString: string = 'https://cat-fact.herokuapp.com/facts';

  getCatFact() {
    return this.http.get(this.urlString).subscribe(
      (data) => {
        console.log(data);
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const catFact = data[key];
            this.catFacts.push(catFact);
          }
        }
      },
      (error) => console.log(error)
    );
  }
}
