import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { allItemsArray } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}
  x: number;

  getContents() {
    return of(allItemsArray);
    // return of(allItemsArray).pipe(
    //   delay(5000),
    //   map((x) => x.map((item) => item.title))
    // );
    /////////////////////////////
    // .pipe(
    //   delay(5000),
    //   map((x) => {
    //     return x.map((item) => {
    //       return item.title;
    //     });
    //   })
    // );
  }

  getContentById(id: number) {
    const content = allItemsArray.find((c) => c.id == id);
    return of(content);
  }
}
