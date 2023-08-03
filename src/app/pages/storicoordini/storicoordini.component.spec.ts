import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoordiniComponent } from './storicoordini.component';

describe('StoricoordiniComponent', () => {
  let component: StoricoordiniComponent;
  let fixture: ComponentFixture<StoricoordiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoricoordiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoricoordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
