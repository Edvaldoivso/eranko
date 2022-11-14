import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErankoCardComponent } from './eranko-card.component';

describe('ErankoCardComponent', () => {
  let component: ErankoCardComponent;
  let fixture: ComponentFixture<ErankoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErankoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErankoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
