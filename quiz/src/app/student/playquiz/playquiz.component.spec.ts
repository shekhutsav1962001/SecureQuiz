import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayquizComponent } from './playquiz.component';

describe('PlayquizComponent', () => {
  let component: PlayquizComponent;
  let fixture: ComponentFixture<PlayquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
