import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { allItemsArray } from '../helper-files/contentDB';

// https://test.com/api => baseApi

// GET - {{baseAPi}}/customers
// POST - {{baseAPi}}/customers - {key:value}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}
  x: number;

  getContents() {
    return this.http.get<Content[]>('api/content');

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

  createContent(content: Content) {
    return this.http.post<Content>('api/content', content);
  }

  getContentById(id: number) {
    const content = allItemsArray.find((c) => c.id == id);
    return of(content);
  }
}
