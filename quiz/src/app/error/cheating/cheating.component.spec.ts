import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatingComponent } from './cheating.component';

describe('CheatingComponent', () => {
  let component: CheatingComponent;
  let fixture: ComponentFixture<CheatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
