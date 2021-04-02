import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgboxComponent } from './msgbox.component';

describe('MsgboxComponent', () => {
  let component: MsgboxComponent;
  let fixture: ComponentFixture<MsgboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
