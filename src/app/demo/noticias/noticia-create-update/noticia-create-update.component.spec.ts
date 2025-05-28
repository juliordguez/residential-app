import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCreateUpdateComponent } from './noticia-create-update.component';

describe('NoticiaCreateUpdateComponent', () => {
  let component: NoticiaCreateUpdateComponent;
  let fixture: ComponentFixture<NoticiaCreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaCreateUpdateComponent]
    });
    fixture = TestBed.createComponent(NoticiaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
