import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> =
    new EventEmitter<Content>();
  newContent?: Content;

  @Input() item!: Content;

  constructor() {}

  ngOnInit(): void {}

  addContent(
    id: string,
    title: string,
    creator: string,
    description: string,
    imgURL: string,
    type: string,
    tags: string
  ): void {
    this.newContent = {
      id: parseInt(id),
      title: title,
      creator: creator,
      description: description,
      imgURL: imgURL,
      type: type,
      tags: tags.split(','),
    };
    this.newContentEvent.emit(this.newContent);
  }
}
