import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRvComponent } from './modifier-rv.component';

describe('ModifierRvComponent', () => {
  let component: ModifierRvComponent;
  let fixture: ComponentFixture<ModifierRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
