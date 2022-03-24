import { isNgTemplate } from '@angular/compiler';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Content } from '../helper-files/content-interface';

import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit, OnChanges {
  allItemsArray: Content[];
  message: string = '';
  isexist: boolean = true;
  // @Input() ItemArray: Content;
  @Input() newContent: Content;

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.contentService.getContents().subscribe((res) => {
    //   console.log(res);
    // });

    this.contentService.getContents().subscribe((itemArray) => {
      this.allItemsArray = itemArray;
      this.messageService.add(`contents array are loaded!`);
    });

    // this.contentService.getContentById(1).subscribe((res) => {
    //   console.log(res);
    // });
    // this.contentService.getContentById(5).subscribe((itemArray) => {
    //   return itemArray;
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.newContent) {
      this.allItemsArray.push(this.newContent);
    }
  }

  search(title: string) {
    let index = this.allItemsArray.findIndex(
      (item) => item.title.toLowerCase() == title.toLowerCase()
    );
    console.log(index);

    if (index == -1) {
      this.message = `this title : ${title} does not exist.`;
      this.isexist = false;
    } else {
      this.message = `this title : ${title} exists.`;
      this.isexist = true;
    }
  }

  // addContentToList(newContentFromChild: Content) {
  //   this.allItemsArray.push(newContentFromChild);
  //   this.allItemsArray = [...this.allItemsArray];

  //   console.log('new contenet added successfully');
  // }
}
