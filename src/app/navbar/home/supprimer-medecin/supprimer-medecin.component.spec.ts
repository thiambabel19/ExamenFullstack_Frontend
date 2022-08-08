import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerMedecinComponent } from './supprimer-medecin.component';

describe('SupprimerMedecinComponent', () => {
  let component: SupprimerMedecinComponent;
  let fixture: ComponentFixture<SupprimerMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
