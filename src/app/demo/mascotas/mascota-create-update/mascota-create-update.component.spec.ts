import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaCreateUpdateComponent } from './mascota-create-update.component';

describe('MascotaCreateUpdateComponent', () => {
  let component: MascotaCreateUpdateComponent;
  let fixture: ComponentFixture<MascotaCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(MascotaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
