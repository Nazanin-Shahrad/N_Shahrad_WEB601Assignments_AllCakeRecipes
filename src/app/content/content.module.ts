import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentListComponent } from '../content-list/content-list.component';
import { ContentModifyFormComponent } from '../content-modify-form/content-modify-form.component';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    ContentCardComponent,
    ContentListComponent,
    ModifyContentComponent,
    ContentModifyFormComponent,
    ContentDetailComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
  ],
})
export class ContentModule {}
