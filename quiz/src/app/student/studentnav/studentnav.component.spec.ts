import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnavComponent } from './studentnav.component';

describe('StudentnavComponent', () => {
  let component: StudentnavComponent;
  let fixture: ComponentFixture<StudentnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
