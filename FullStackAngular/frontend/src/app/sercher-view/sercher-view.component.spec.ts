import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercherViewComponent } from './sercher-view.component';

describe('SercherViewComponent', () => {
  let component: SercherViewComponent;
  let fixture: ComponentFixture<SercherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SercherViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SercherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
