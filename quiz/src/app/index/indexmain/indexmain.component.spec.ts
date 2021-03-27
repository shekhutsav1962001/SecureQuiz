import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmainComponent } from './indexmain.component';

describe('IndexmainComponent', () => {
  let component: IndexmainComponent;
  let fixture: ComponentFixture<IndexmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
