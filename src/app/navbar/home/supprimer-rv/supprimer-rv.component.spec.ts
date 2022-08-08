import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerRvComponent } from './supprimer-rv.component';

describe('SupprimerRvComponent', () => {
  let component: SupprimerRvComponent;
  let fixture: ComponentFixture<SupprimerRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
