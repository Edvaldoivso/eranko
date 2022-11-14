import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeErankoComponent } from './home-eranko.component';

describe('HomeErankoComponent', () => {
  let component: HomeErankoComponent;
  let fixture: ComponentFixture<HomeErankoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeErankoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeErankoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
