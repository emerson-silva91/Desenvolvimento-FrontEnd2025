import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impar } from './impar';

describe('Impar', () => {
  let component: Impar;
  let fixture: ComponentFixture<Impar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
