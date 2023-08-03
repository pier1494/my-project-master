import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidermarchiComponent } from './slidermarchi.component';

describe('SlidermarchiComponent', () => {
  let component: SlidermarchiComponent;
  let fixture: ComponentFixture<SlidermarchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidermarchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidermarchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
