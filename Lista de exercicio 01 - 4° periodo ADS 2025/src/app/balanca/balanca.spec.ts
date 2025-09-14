import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balanca } from './balanca';

describe('Balanca', () => {
  let component: Balanca;
  let fixture: ComponentFixture<Balanca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Balanca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Balanca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
