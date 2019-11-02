import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePSWComponent } from './restore-psw.component';

describe('RestorePSWComponent', () => {
  let component: RestorePSWComponent;
  let fixture: ComponentFixture<RestorePSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
