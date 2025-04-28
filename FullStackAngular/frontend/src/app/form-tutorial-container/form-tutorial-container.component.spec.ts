import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTutorialContainerComponent } from './form-tutorial-container.component';

describe('FormTutorialContainerComponent', () => {
  let component: FormTutorialContainerComponent;
  let fixture: ComponentFixture<FormTutorialContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTutorialContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTutorialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
