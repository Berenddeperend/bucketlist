import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListComponentComponent } from './view-list-component.component';

describe('ViewListComponentComponent', () => {
  let component: ViewListComponentComponent;
  let fixture: ComponentFixture<ViewListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
