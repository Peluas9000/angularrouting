import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicarRandom } from './multiplicar-random';

describe('MultiplicarRandom', () => {
  let component: MultiplicarRandom;
  let fixture: ComponentFixture<MultiplicarRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplicarRandom],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiplicarRandom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
