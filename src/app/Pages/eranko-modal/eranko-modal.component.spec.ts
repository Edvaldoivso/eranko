import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErankoModalComponent } from './eranko-modal.component';

describe('ErankoModalComponent', () => {
  let component: ErankoModalComponent;
  let fixture: ComponentFixture<ErankoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErankoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErankoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
