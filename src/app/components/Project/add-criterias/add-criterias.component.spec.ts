import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCriteriasComponent } from './add-criterias.component';

describe('AddCriteriasComponent', () => {
  let component: AddCriteriasComponent;
  let fixture: ComponentFixture<AddCriteriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCriteriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCriteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
