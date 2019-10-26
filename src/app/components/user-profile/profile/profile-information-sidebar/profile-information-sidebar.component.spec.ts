import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationSidebarComponent } from './profile-information-sidebar.component';

describe('ProfileInformationSidebarComponent', () => {
  let component: ProfileInformationSidebarComponent;
  let fixture: ComponentFixture<ProfileInformationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInformationSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
