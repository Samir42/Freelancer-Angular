import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedworkComponent } from './needwork.component';

describe('NeedworkComponent', () => {
  let component: NeedworkComponent;
  let fixture: ComponentFixture<NeedworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
