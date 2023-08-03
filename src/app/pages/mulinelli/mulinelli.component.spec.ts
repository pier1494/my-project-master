import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulinelliComponent } from './mulinelli.component';

describe('MulinelliComponent', () => {
  let component: MulinelliComponent;
  let fixture: ComponentFixture<MulinelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulinelliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulinelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
