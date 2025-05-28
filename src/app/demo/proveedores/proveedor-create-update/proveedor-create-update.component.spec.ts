import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorCreateUpdateComponent } from './proveedor-create-update.component';

describe('ProveedorCreateUpdateComponent', () => {
  let component: ProveedorCreateUpdateComponent;
  let fixture: ComponentFixture<ProveedorCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(ProveedorCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
