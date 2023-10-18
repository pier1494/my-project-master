import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfcastingComponent } from './surfcasting.component';

describe('SurfcastingComponent', () => {
  let component: SurfcastingComponent;
  let fixture: ComponentFixture<SurfcastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfcastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
