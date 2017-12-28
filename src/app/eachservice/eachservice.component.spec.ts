import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachserviceComponent } from './eachservice.component';

describe('EachserviceComponent', () => {
  let component: EachserviceComponent;
  let fixture: ComponentFixture<EachserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
