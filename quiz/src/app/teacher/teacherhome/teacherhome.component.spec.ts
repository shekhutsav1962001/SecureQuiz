import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherhomeComponent } from './teacherhome.component';

describe('TeacherhomeComponent', () => {
  let component: TeacherhomeComponent;
  let fixture: ComponentFixture<TeacherhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
