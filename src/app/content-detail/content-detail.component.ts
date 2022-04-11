import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}
  // this.route.params.subscribe((param) => {
  //   console.log(2222, param['id']);
  // });

  content: Content;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.contentService.getContentById(+id).subscribe((res) => {
      this.content = res;
    });
  }
}
