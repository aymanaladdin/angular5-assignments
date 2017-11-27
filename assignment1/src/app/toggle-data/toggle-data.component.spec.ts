import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDataComponent } from './toggle-data.component';

describe('ToggleDataComponent', () => {
  let component: ToggleDataComponent;
  let fixture: ComponentFixture<ToggleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
