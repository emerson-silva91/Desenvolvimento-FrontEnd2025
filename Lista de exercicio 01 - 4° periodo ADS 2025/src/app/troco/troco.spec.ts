import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Troco } from './troco';

describe('Troco', () => {
  let component: Troco;
  let fixture: ComponentFixture<Troco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Troco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Troco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
