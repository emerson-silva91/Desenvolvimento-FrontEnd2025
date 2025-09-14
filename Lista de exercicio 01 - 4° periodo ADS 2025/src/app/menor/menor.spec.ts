import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menor } from './menor';

describe('Menor', () => {
  let component: Menor;
  let fixture: ComponentFixture<Menor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
