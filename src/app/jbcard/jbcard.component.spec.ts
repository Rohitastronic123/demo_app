import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JBCardComponent } from './jbcard.component';

describe('JBCardComponent', () => {
  let component: JBCardComponent;
  let fixture: ComponentFixture<JBCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JBCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JBCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
