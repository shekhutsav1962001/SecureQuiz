import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundErrorComponent } from './notfound-error.component';

describe('NotfoundErrorComponent', () => {
  let component: NotfoundErrorComponent;
  let fixture: ComponentFixture<NotfoundErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
