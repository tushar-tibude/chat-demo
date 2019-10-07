import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightChatComponent } from './right-chat.component';

describe('RightChatComponent', () => {
  let component: RightChatComponent;
  let fixture: ComponentFixture<RightChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
