import { Component, OnInit } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

import { ContentService } from '../app/services/content.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'N_Shahrad_AllCakeRecipes';
  content: Content;
  // selectedContent: Content;
  contents: Content[];

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.contentService.getContentById(5).subscribe((item) => {
    //   this.content = item;
    //   this.messageService.add(`content with id ${this.content.id} is loaded!`);
    // });
    // this.contentService.getContents().subscribe((items) => {
    //   this.contents = items;
    // });
  }

  onContentModified(content: Content) {
    this.content = content;
  }

  // getContent(value: string) {
  //   const x = [1, 2, 3, 4, 5];
  //   const isOutOfBound = +value > this.contents[this.contents.length - 1].id;

  //   if (isNaN(+value) || isOutOfBound) {
  //     this.messageService.add('some error occured');
  //     return;
  //   }

  //   // const content = await this.contentService
  //   //   .getContentById(+value)
  //   //   .toPromise();
  //   // console.log(2);

  //   this.contentService.getContentById(+value).subscribe((c) => {
  //     // if (!c) {
  //     //   this.messageService.add('some error occured');
  //     //   return;
  //     // }
  //     this.selectedContent = c;
  //   });
  // }
}
