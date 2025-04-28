import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpublikowaneComponent } from './opublikowane.component';

describe('OpublikowaneComponent', () => {
  let component: OpublikowaneComponent;
  let fixture: ComponentFixture<OpublikowaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpublikowaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpublikowaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
