import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottocategoriaComponent } from './sottocategoria.component';

describe('SottocategoriaComponent', () => {
  let component: SottocategoriaComponent;
  let fixture: ComponentFixture<SottocategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SottocategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SottocategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
