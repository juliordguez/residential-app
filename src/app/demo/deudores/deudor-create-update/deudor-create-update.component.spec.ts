import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudorCreateUpdateComponent } from './deudor-create-update.component';

describe('DeudorCreateUpdateComponent', () => {
  let component: DeudorCreateUpdateComponent;
  let fixture: ComponentFixture<DeudorCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeudorCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(DeudorCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
