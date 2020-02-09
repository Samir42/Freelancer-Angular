import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreataboutComponent } from './greatabout.component';

describe('GreataboutComponent', () => {
  let component: GreataboutComponent;
  let fixture: ComponentFixture<GreataboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreataboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreataboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
