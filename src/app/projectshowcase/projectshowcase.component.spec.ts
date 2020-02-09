import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectshowcaseComponent } from './projectshowcase.component';

describe('ProjectshowcaseComponent', () => {
  let component: ProjectshowcaseComponent;
  let fixture: ComponentFixture<ProjectshowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectshowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
