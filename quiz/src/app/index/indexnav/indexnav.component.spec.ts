import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexnavComponent } from './indexnav.component';

describe('IndexnavComponent', () => {
  let component: IndexnavComponent;
  let fixture: ComponentFixture<IndexnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
