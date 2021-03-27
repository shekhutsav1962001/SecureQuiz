import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeequestionComponent } from './seequestion.component';

describe('SeequestionComponent', () => {
  let component: SeequestionComponent;
  let fixture: ComponentFixture<SeequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
