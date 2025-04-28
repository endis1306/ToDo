import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpublikowaneConteinerComponent } from './opublikowane-conteiner.component';

describe('OpublikowaneConteinerComponent', () => {
  let component: OpublikowaneConteinerComponent;
  let fixture: ComponentFixture<OpublikowaneConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpublikowaneConteinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpublikowaneConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
