import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorosoCreateUpdateComponent } from './moroso-create-update.component';

describe('MorosoCreateUpdateComponent', () => {
  let component: MorosoCreateUpdateComponent;
  let fixture: ComponentFixture<MorosoCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorosoCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(MorosoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
