import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercherContainerComponent } from './sercher-container.component';

describe('SercherContainerComponent', () => {
  let component: SercherContainerComponent;
  let fixture: ComponentFixture<SercherContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SercherContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SercherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
