import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maior } from './maior';

describe('Maior', () => {
  let component: Maior;
  let fixture: ComponentFixture<Maior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
