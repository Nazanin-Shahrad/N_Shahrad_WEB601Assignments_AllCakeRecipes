import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-modify-form',
  templateUrl: './content-modify-form.component.html',
  styleUrls: ['./content-modify-form.component.scss'],
})
export class ContentModifyFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    private contentService: ContentService
  ) {}

  newContent = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: '',
  };

  onSubmit() {
    // const result: Content = {
    //   ...this.newContent,
    //   tags: this.newContent.tags.split(' '),
    // };
    // this.contentService.createContent(result).subscribe((res) => {
    //   console.log(res);
    // });
    this.dialogRef.close(this.newContent);
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
