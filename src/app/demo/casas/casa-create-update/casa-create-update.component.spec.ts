import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaCreateUpdateComponent } from './casa-create-update.component';

describe('CasaCreateUpdateComponent', () => {
  let component: CasaCreateUpdateComponent;
  let fixture: ComponentFixture<CasaCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(CasaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
