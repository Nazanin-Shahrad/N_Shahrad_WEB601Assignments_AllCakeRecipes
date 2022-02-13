import { leadingComment } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  constructor() {}

  @Input('testTitle') testTitle: string;
  // @Input('x') testTitle: string;
  @Input() item: Content;

  ngOnInit(): void {
    console.log('hello');
  }

  onImageClick() {
    console.log(this.item.id, this.item.title);
  }
}
