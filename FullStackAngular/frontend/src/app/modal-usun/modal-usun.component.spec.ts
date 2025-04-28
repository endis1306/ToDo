import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsunComponent } from './modal-usun.component';

describe('ModalUsunComponent', () => {
  let component: ModalUsunComponent;
  let fixture: ComponentFixture<ModalUsunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUsunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
