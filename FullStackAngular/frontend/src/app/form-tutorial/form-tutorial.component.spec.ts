import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTutorialComponent } from './form-tutorial.component';

describe('FormTutorialComponent', () => {
  let component: FormTutorialComponent;
  let fixture: ComponentFixture<FormTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
