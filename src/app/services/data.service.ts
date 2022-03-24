import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { allItemsArray } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: any): {} | Observable<{}> | Promise<{}> {
    const content = allItemsArray;
    return { content };
    // return { content: content };
  }

  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((c) => c.id)) + 1
      : 2000;
  }
}
