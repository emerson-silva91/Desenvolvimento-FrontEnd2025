import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porcentagem } from './porcentagem';

describe('Porcentagem', () => {
  let component: Porcentagem;
  let fixture: ComponentFixture<Porcentagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porcentagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Porcentagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
