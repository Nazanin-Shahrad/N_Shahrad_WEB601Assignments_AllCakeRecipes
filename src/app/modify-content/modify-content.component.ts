import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ContentModifyFormComponent } from '../content-modify-form/content-modify-form.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss'],
})
export class ModifyContentComponent implements OnInit {
  constructor(
    private contentService: ContentService,
    public dialog: MatDialog
  ) {}

  @Output() contentModified = new EventEmitter();

  ngOnInit(): void {}

  // onSubmit() {
  //   const result: Content = {
  //     ...this.newContent,
  //     tags: this.newContent.tags.split(' '),
  //   };
  //   this.contentService.createContent(result).subscribe((res) => {
  //     console.log(res);
  //     this.contentModified.emit(res)
  //   });
  // }

  showModal() {
    const dialogRef = this.dialog.open(ContentModifyFormComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      const result: Content = {
        ...res,
        tags: res.tags.split(' '),
      };
      this.contentService.createContent(result).subscribe((res) => {
        console.log(res);
        this.contentModified.emit(res);
      });
    });
  }
}
