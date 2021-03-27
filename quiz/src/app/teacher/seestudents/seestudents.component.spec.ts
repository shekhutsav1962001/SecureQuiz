import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeestudentsComponent } from './seestudents.component';

describe('SeestudentsComponent', () => {
  let component: SeestudentsComponent;
  let fixture: ComponentFixture<SeestudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeestudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
