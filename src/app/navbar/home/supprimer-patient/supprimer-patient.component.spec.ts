import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPatientComponent } from './supprimer-patient.component';

describe('SupprimerPatientComponent', () => {
  let component: SupprimerPatientComponent;
  let fixture: ComponentFixture<SupprimerPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
