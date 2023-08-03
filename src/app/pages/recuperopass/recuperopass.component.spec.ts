import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperopassComponent } from './recuperopass.component';

describe('RecuperopassComponent', () => {
  let component: RecuperopassComponent;
  let fixture: ComponentFixture<RecuperopassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperopassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
