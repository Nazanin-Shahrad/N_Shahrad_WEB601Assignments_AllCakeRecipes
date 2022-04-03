import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModifyFormComponent } from './content-modify-form.component';

describe('ContentModifyFormComponent', () => {
  let component: ContentModifyFormComponent;
  let fixture: ComponentFixture<ContentModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentModifyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
