import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequizComponent } from './createquiz.component';

describe('CreatequizComponent', () => {
  let component: CreatequizComponent;
  let fixture: ComponentFixture<CreatequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
