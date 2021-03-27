import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionComponent } from './addquestion.component';

describe('AddquestionComponent', () => {
  let component: AddquestionComponent;
  let fixture: ComponentFixture<AddquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
