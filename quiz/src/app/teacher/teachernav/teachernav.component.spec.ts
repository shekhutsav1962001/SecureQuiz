import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernavComponent } from './teachernav.component';

describe('TeachernavComponent', () => {
  let component: TeachernavComponent;
  let fixture: ComponentFixture<TeachernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachernavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
