import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartusComponent } from './startus.component';

describe('StartusComponent', () => {
  let component: StartusComponent;
  let fixture: ComponentFixture<StartusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
