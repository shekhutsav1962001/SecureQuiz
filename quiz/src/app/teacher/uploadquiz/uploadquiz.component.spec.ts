import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadquizComponent } from './uploadquiz.component';

describe('UploadquizComponent', () => {
  let component: UploadquizComponent;
  let fixture: ComponentFixture<UploadquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
