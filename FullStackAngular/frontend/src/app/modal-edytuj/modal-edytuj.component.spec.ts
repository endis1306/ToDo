import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdytujComponent } from './modal-edytuj.component';

describe('ModalEdytujComponent', () => {
  let component: ModalEdytujComponent;
  let fixture: ComponentFixture<ModalEdytujComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEdytujComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
