import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRvComponent } from './liste-rv.component';

describe('ListeRvComponent', () => {
  let component: ListeRvComponent;
  let fixture: ComponentFixture<ListeRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
